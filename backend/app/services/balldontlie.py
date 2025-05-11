import httpx

BASE_URL = "https://www.balldontlie.io/api/v1"


async def search_players(query: str):
    async with httpx.AsyncClient() as client:
        resp = await client.get(f"{BASE_URL}/players?search={query}")
        return resp.json()


async def get_player_stats(player_id: int):
    async with httpx.AsyncClient() as client:
        resp = await client.get(f"{BASE_URL}/season_averages?season=2023&player_ids[]={player_id}")
        return resp.json()
