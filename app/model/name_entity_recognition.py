import spacy

nlp = spacy.load("en_core_web_sm")

def entity_recognition(text:str):
    # Process a text
    doc = nlp(text)
    # transform the response into json
    a=doc.to_json()

    return a