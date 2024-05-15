# Kolekcja ulubionych przepisów kulinarnych
## 1. Opis projektu
Projekt "Kolekcja ulubionych przepisów kulinarnych" ma na celu stworzenie platformy, która umożliwia użytkownikom przeglądanie, dodawanie, edycję i usuwanie przepisów kulinarnych, a także komentowanie i ocenianie przepisów innych użytkowników.
## 2. Rejestracja i autoryzacja
Aplikacja będzie posiadała mechanizm rejestracji i autoryzacji użytkowników. Nowi użytkownicy będą mogli założyć konto, a zalogowani użytkownicy będą mieć dostęp do dodatkowych funkcji, takich jak dodawanie przepisów, komentowanie i ocenianie.
## 3. Przeglądanie przepisów 
Użytkownicy mogą przeglądać dostępne przepisy kulinarnych w aplikacji. Przepisy będą wyświetlane, umożliwiając użytkownikom łatwe znalezienie interesujących ich przepisów.
## 4. Dodawanie nowych przepisów
Zarejestrowani użytkownicy mogą dodawać nowe przepisy do kolekcji. Formularz dodawania przepisu będzie zawierał pola takie jak tytuł przepisu, składniki, instrukcje.
## 5. Edycja i usuwanie przepisów 
Użytkownicy będą mieli możliwość edycji i usuwania przepisów, które dodali. Będą mogli zaktualizować dane przepisu lub całkowicie go usunąć z kolekcji.
## 6. Komentarz i ocena 
Każdy użytkownik będzie mógł dodać komentarz i ocenę do przepisu. Dzięki temu inni użytkownicy będą mogli dowiedzieć się, jakie są opinie na temat danego przepisu oraz jak smakował innym osobom.
## 7. Użyte technologie 
Projekt będzie wykorzystywał różne technologie, język programowania do backendu (Node.js z Express), system zarządzania bazą danych (MongoDB).
### Instalacja i uruchomienie aplikacji:
### 7.1.1 Instalacja Apache24 dla Windows 10 i 11
- Krok 1. Pobieranie Apache24 https://www.apachelounge.com/download/ (Apache 2.4.59-240404 Win64) i wypakuj jego folder Apache24 do katalogu głównego dysku C:
- Krok 2. Otwórz wiersz poleceń `cmd` (nie PowerShell) i uruchom Apache za pomocą:
```bash
cd C:\Apache24\bin
```
```bash
httpd
```
- Krok 3. C:\Apache24\htdocs to główny folder zawartości serwera www. Przenosić `MVC_project_przepis` do katalogu `C:\Apache24\htdocs`
### 7.1.2 Instalacja Apache2 dla Linux
- Krok 1. Zainstaluj Apache2 za pomocą menedżera pakietów. Na przykład dla `Ubuntu` lub `Debiana` można użyć polecenia:
```sql
sudo apt update
sudo apt install apache2
```
- Krok 2. Upewnij się, że Apache2 jest uruchomiony. Otwórz przeglądarkę internetową i przejdź do http://localhost. Jeśli wszystko jest poprawnie skonfigurowane, zobaczysz stronę startową Apache2.
### 7.2.1 Instalacja MongoDB dla Windows
- Krok 1. Pobieranie MongoDB https://www.mongodb.com/try/download/community i zainstaluj go.
- Krok 2. W `New Connection` do `URI` wpisz ścieżkę:
```bash
mongodb://localhost/MVC_project_przepis
```
### 7.2.2 Instalacja MongoDB dla Linux
- Krok 1. Zainstaluj MongoDB. Aby to zrobić, możesz skorzystać z oficjalnej dokumentacji MongoDB lub wykonać następujące kroki:
```sql
sudo apt update
sudo apt install -y mongodb
```
- Krok 2. Po instalacji uruchom usługę MongoDB:
```sql
sudo systemctl start mongodb
```
### 7.3 Uruchomienie aplikacji
Aby uruchomić aplikację, należy zainstalować dodatkowe paczki:
```bash
npm install express ejs body-parser express-session bcryptjs mongoose path
```
Po zainstalowaniu paczek, uruchom aplikację za pomocą polecenia:
```bash
node app.js
```
Aplikacja będzie dostępna pod adresem http://localhost:3000 
