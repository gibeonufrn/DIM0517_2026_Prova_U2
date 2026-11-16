from fastapi import FastAPI

app = FastAPI()


@app.get("/hello")
def hello():
    return {"message": "Hello, bro!"}


@app.get("/healthy")
def healthy():
    return {"status": "healthy"}
