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
## 7.1 Instalacja dla Windows 10 i 11
### 7.1.1 Instalacja Apache24
- Krok 1. Pobieranie Apache24 https://www.apachelounge.com/download/ (Apache 2.4.59-240404 Win64) i wypakuj jego folder Apache24 do katalogu głównego dysku C:
- Krok 2. Otwórz wiersz poleceń `cmd` (nie PowerShell) i uruchom Apache za pomocą:
```bash
cd C:\Apache24\bin
```
```bash
httpd
```
- Krok 3. C:\Apache24\htdocs to główny folder zawartości serwera www. Przenosić `MVC_project_przepis` do katalogu `C:\Apache24\htdocs`
### 7.1.2 Instalacja MongoDB
- Krok 1. Pobieranie MongoDB https://www.mongodb.com/try/download/community i zainstaluj go.
- Krok 2. W `New Connection` do `URI` wpisz ścieżkę:
```bash
mongodb://localhost/MVC_project_przepis
```
## 7.2 Instalacja dla Linux
Przed zainstalowaniem projektu musisz mieć zainstalowany `Apache` i `nodejs` z `npm`
### 7.2.1 Instalacja MongoDB
Opis instalacji `MongoDB`, zobacz instrukcje na stronie https://www.mongodb.com/docs/manual/tutorial/, musisz wybrać swoją kompilację Linuksa
### 7.2.2 Instalacja projekt MVC_project_przepis
Prześlij projekt `MVC_project_przepis` do katalogu używanego przez `Apache` do `obsługi hostów`

Przykład katalogu instalacyjnego projektu `/var/www/html`
## 7.3 Uruchomienie aplikacji
Aby uruchomić aplikację, należy zainstalować dodatkowe paczki:
```bash
npm install express ejs body-parser express-session bcryptjs mongoose path
```
Po zainstalowaniu paczek, uruchom aplikację za pomocą polecenia:
```bash
node app.js
```
Aplikacja będzie dostępna pod adresem http://localhost:3000 
