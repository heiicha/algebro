from google import genai
from google.genai import types


client = genai.Client(api_key=)


def get_feedback(question, answer):

    prompt = f"""You are a helpful math tutor, a student has answered this 
    question: {question}, with this answer: {answer}. Please give them feedback.
    Additionally in a new line put Answer: 1, if you think they need to try a
    similar question, or Answer: 0, if you think they need to try a different question.
    Output absolutely nothing else on the last line.
    """
    content = f""

    response = client.models.generate_content(
        model = "gemini-2.5-flash", contents=prompt,
        config=types.GenerateContentConfig(
            thinking_config=types.ThinkingConfig(thinking_budget=0)
        ),
    )
    output = response.text
    result = output.split("\n")
    answer = False
    if result[-1][-1] == 0:
        answer = True
    result.pop(-1)
    feedback = "\n".join(result)
    return [output, answer]