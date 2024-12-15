# main.py
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from decouple import config
import uvicorn

from motor.motor_asyncio import AsyncIOMotorClient

# routes
from routers.saynete_main_router import router as saynete_main_router

HOST = config('HOST', cast=str)
DOMAIN = config('DOMAIN', cast=str)
WWW_DOMAIN = config('WWW_DOMAIN', cast=str)
DB_URL = config('DB_URL', cast=str)
DB_NAME = config('DB_NAME', cast=str)
SSL_CERT_PEM = config('SSL_CERT_PEM', cast=str)
SSL_KEY_PEM = config('SSL_KEY_PEM', cast=str)

# used by frontend calls
origins = [
"http://localhost",
"http://localhost:8080",
"http://localhost:3000",
"http://localhost:8000",
"http://"+HOST,
"http://"+HOST+":8080",
"http://"+HOST+":8000",
"http://"+HOST+":3000",
"http://"+DOMAIN,
"http://"+DOMAIN+":8080",
"http://"+DOMAIN+":8000",
"http://"+DOMAIN+":3000",
"http://"+WWW_DOMAIN,
"http://"+WWW_DOMAIN+":8080",
"http://"+WWW_DOMAIN+":8000",
"http://"+WWW_DOMAIN+":3000",
"https://"+WWW_DOMAIN+":8000",
"https://"+WWW_DOMAIN+":3000",
"ws://"+WWW_DOMAIN+":8000",
"ws://"+DOMAIN+":8000",
"ws://"+HOST+":8000",
]

app = FastAPI()
app.add_middleware(
CORSMiddleware,
allow_origins=origins,
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient(DB_URL)
    app.mongodb = app.mongodb_client[DB_NAME]

@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()
        
app.include_router(saynete_main_router, prefix="/saynetes", tags=["saynetes"])

if __name__ == "__main__":
    uvicorn.run("__main__:app", host="0.0.0.0", port=8000, ssl_certfile=SSL_CERT_PEM , ssl_keyfile=SSL_KEY_PEM, reload=True, )