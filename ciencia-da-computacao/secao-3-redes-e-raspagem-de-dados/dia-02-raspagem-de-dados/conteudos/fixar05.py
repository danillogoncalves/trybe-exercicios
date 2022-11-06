from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"

while next_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)

    for product in selector.css(".product_pod"):
        href = product.css(".product_pod h3 a::attr(href)").get()
        detail_page_url = URL_BASE + href

        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        description = detail_selector.css(
            "#product_description ~ p::text"
        ).get()
        print(description)

    next_page_url = selector.css(".next a::attr(href)").get()
