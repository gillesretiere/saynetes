from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import LangDeckDB

router = APIRouter()

#--- list all saynetes )
@router.get("/", response_description="List all saynetes ")
async def list_all_saynetes(request:Request, language_uid: Optional[str]=None)-> List[LangDeckDB]:
    query={}
    if language_uid:
        query["language"] = language_uid
    full_query = request.app.mongodb["saynetes"].find(query).sort("language",1)
    result = [LangDeckDB(**raw_rec) async for raw_rec in full_query]
    return result

#--- list one langdeck by language uid
@router.get("/{uid}", response_description="List saynetes by language uid")
async def list_saynetes_by_language_id (request: Request, uid: str):
    if (language := await request.app.mongodb["saynetes"].find_one({"language":uid})) is not None:
        return LangDeckDB(**language)
    raise HTTPException (status_code=404, detail=f"language with uid {uid} not found.") 