import requests
from bs4 import BeautifulSoup


# # Acessa uma URL e retorna um objeto do Beautiful Soup
def get_html_soup(url):
    page = requests.get(url)
    html_page = page.text

    soup = BeautifulSoup(html_page, "html.parser")
    soup.prettify()
    return soup


# # Recebe um objeto soup e retorna informações das notícias de uma página
def get_page_news(soup):

    news = []

    for post in soup.find_all(
        "article", {"class": "tec--card tec--card--medium"}
    ):

        item = {}

        item["tag"] = post.find("div", {"class": "tec--card__info"}).a.string

        item["title"] = post.find("h3", {"class": "tec--card__title"}).a.string

        item["link"] = post.find("h3", {"class": "tec--card__title"}).a["href"]

        item["date"] = post.find(
            "div", {"class": "tec--timestamp__item z--font-semibold"}
        ).string

        item["time"] = post.find(
            "div", {"class": "z--truncate z-flex-1"}
        ).string

        news.append(item)

    return news


# Recebe um objeto soup e retorna o link que redireciona
# para a página seguinte, caso ele exista
def get_next_page(soup_page):
    try:

        # Busca pela tag 'a' com as classes específicas do link desejado
        return soup_page.find(
            "a",
            {"class": "tec--btn"},
        )["href"]
    except TypeError:
        return None


# Recebe uma URL e retorna uma lista com todas as notícias do site
def scrape_all(url):
    all_news = []

    # Enquanto a pesquisa pelo link que vai para a página seguinte existir
    while get_next_page(get_html_soup(url)) is not None:

        # Imprime a URL da página seguinte
        print(get_next_page(get_html_soup(url)))

        # Adiciona os elementos da lista com as notícias de cada
        # página na lista 'all_news'
        all_news.extend(get_page_news(get_html_soup(url)))

        # define a página seguinte como URL para a próxima iteração
        url = get_next_page(get_html_soup(url))

    return all_news


# Vamos começar perto das últimas páginas pra não ter que fazer a requisição
# do site inteiro
print(scrape_all("https://www.tecmundo.com.br/novidades?page=11030"))
