# 🌍 Regions API [![Netlify](https://img.shields.io/netlify/2c6568b8-5d43-4ec4-b784-72735c518674?logo=netlify&logoColor=#00C7B7&labelColor=545a61)](https://app.netlify.app/sites/regionsapi/deploys) [![Codecov](https://img.shields.io/codecov/c/github/mustafagenc/regions?logo=codecov&logoColor=#F01F7A&labelColor=545a61)](https://codecov.io/gh/mustafagenc/regions) [![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/mustafagenc/regions?logo=codefactor&logoColor=#F44A6A&labelColor=545a61)](https://www.codefactor.io/repository/github/mustafagenc/regions)

Bu API projesi, bölge, ülke ve şehir bilgilerini listelemektedir. Veriler, açık kaynaklı ve kapsamlı bir veri tabanı olan [dr5hn/countries-states-cities-database](https://github.com/dr5hn/countries-states-cities-database) projesinden alınmıştır. Bu sayede geniş ve güncel bir coğrafi bilgiye erişim sağlanmaktadır.

[![Postman Collection](public/postman.png) Postman Collection](public/Regions_API.postman_collection.json)

## 🚀 Endpointler

Aşağıda API'de bulunan endpointler ve kısa açıklamaları yer almaktadır:

### 1. Bölgeleri Listele

* **Endpoint:** `GET https://regionsapi.netlify.app/regions`
* **Açıklama:** Tüm bölgelerin listesini getirir.
  * **Örnek:** [https://regionsapi.netlify.app/regions](https://regionsapi.netlify.app/regions)

### 2. Alt Bölgeleri Listele (Belirli Bir Bölgeye Göre)

* **Endpoint:** `GET https://regionsapi.netlify.app/subregions?region_id=:region_id`
* **Açıklama:** Belirtilen `region_id`'ye ait alt bölgelerin listesini getirir.
  * **Örnek:** [https://regionsapi.netlify.app/subregions?region_id=3](https://regionsapi.netlify.app/subregions?region_id=3)

### 3. Ülkeleri Listele

* **Endpoint:** `GET https://regionsapi.netlify.app/countries`
* **Açıklama:** Tüm ülkelerin listesini getirir.
  * **Örnek:** [https://regionsapi.netlify.app/countries](https://regionsapi.netlify.app/countries)

### 4. Şehirleri Listele (Belirli Bir Eyalete Göre)

* **Endpoint:** `GET https://regionsapi.netlify.app/cities?state_id=:state_id`
* **Açıklama:** Belirtilen `state_id`'ye ait şehirlerin listesini getirir.
  * **Örnek:** [https://regionsapi.netlify.app/cities?state_id=2170](https://regionsapi.netlify.app/cities?state_id=2170)

### 5. Eyaletleri Listele (Belirli Bir Ülkeye Göre)

* **Endpoint:** `GET https://regionsapi.netlify.app/states?country_id=:country_id`
* **Açıklama:** Belirtilen `country_id`'ye ait eyaletlerin listesini getirir.
  * **Örnek:** [https://regionsapi.netlify.app/states?country_id=225](https://regionsapi.netlify.app/states?country_id=225)

## İstatistik

* Bölge: 6
* Alt Bölge: 22
* Ülke: 250
* Eyalet/Bölge/Belediye: 5.038
* Şehir/Kasaba/İlçe: 151.024

```Son Güncellenme Tarihi: 01 Nisan 2025```

## 📄 Lisans

Bu proje [MIT](LICENSE) lisansı ile lisanslanmıştır.

## 💡Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request gönderin veya bir issue açın.
