import gzip
from transformers import GPT2Tokenizer

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")


def compressData(dataString):
    global tokenizer
    embedding = tokenizer(dataString)["input_ids"]
    embedding = [str(i) for i in embedding]
    embedding = " ".join(embedding).encode("utf-8")
    t = gzip.compress(embedding)
    return t


def decompressData(data):
    global tokenizer
    embedding = gzip.decompress(data).decode("utf-8").split(" ")
    embedding = [int(i) for i in embedding]
    text = tokenizer.decode(embedding)
    return text


dataString = open("sample.txt", "r").read()
print(len(dataString))

t = gzip.compress(dataString.encode("utf-8"))
print(len(t))

data = compressData(dataString)
print(len(data))
