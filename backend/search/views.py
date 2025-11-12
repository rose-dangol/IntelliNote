import requests
from django.http import JsonResponse
from django.conf import settings


def web_search(request):
    query = request.GET.get('q', '')
    if not query:
        return JsonResponse({'error': 'No query provided'}, status=400)

    # Serper.dev endpoint
    url = "https://google.serper.dev/search"
    headers = {
        "X-API-KEY": settings.SERPER_API_KEY,
        "Content-Type": "application/json"
    }
    data = {
        "q": query
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        results = response.json()

        # Extract top 3 results
        search_results = []
        for item in results.get("organic", [])[:4]:
            search_results.append({
                "title": item.get("title"),
                "link": item.get("link"),
                "snippet": item.get("snippet"),
            })

        return JsonResponse({"results": search_results}, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
