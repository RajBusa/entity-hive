from fastapi import FastAPI
from pydantic import BaseModel
from model.name_entity_recognition import entity_recognition

class TextInput(BaseModel):
    text: str

app = FastAPI()


@app.get("/")
async def read_root():
    return {"Health check": "OK"}

@app.post("/ner")
async def create_item(payload: TextInput):
    json_output =  entity_recognition(payload.text)
    return json_output