from fastapi import APIRouter, Query
from app.services.balldontlie import search_players, get_player_stats

router = APIRouter()


@router.get("/search")
async def search(q: str = Query(...)):
    return await search_players(q)


@router.get("/stats")
async def stats(player_id: int):
    return await get_player_stats(player_id)
