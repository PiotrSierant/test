import styles from './termsSection.module.scss';
import Link from 'next/link';
import { Layout } from '../layout/ComponentLayout';

export const TermsSection = () => {
    return <Layout id={'terms'} bg={styles.background} extendWrapper={styles.extendWrapper}>
            <h1>Regulamin</h1>

            <h2>Strony internetowej <Link href="https://zdrowy-sukces.pl/" rel="noreferrer noopener">www.zdrowy-sukces.pl</Link></h2>

            <h3>&sect;1. Definicje</h3>

            <p>Na potrzeby niniejszego regulaminu, przyjmuje się następujące znaczenie poniższych pojęć:</p>

            <ol>
                <li>Klient – osoba fizyczna posiadająca pełną zdolność do czynności prawnych, osoba prawna lub ułomna osoba prawna,</li>
                <li>Konsument – osoba fizyczna, zawierająca ze Dietetykiem umowę niezwiązaną z bezpośrednio z jej działalnością gospodarczą lub zawodową,</li>
                <li>Sklep – sklep internetowy działający pod adresem www.zdrowy-sukces.pl, tel. 883213756</li>
                <li>Dietetyk Patrycja Marszalec, prowadzącą działalność gospodarczą wpisaną do CEIDG pod nazwą Zdrowy Sukces Patrycja Marszalec, Luchów Górny 60, 23-420 Tarnogród, NIP: 9182176228, REGON: 520895069</li>
                <li>Konsultacja dietetyczna – usługa umożliwiająca Klientowi uzyskanie od Dietetyka porady dietetycznej. Usługa jest świadczona przez Dietetyka drogą elektroniczną, za pośrednictwem Strony Internetowej Sklepu, poprzez komunikator internetowy lub telefonicznie.</li>
                <li>Produkt cyfrowy- Produkt w wersji wyłącznie elektronicznej, co do którego ma zastosowanie wyjątek od prawa odstąpienia od umowy przez Konsumenta.</li>
                <li> Bramka płatności</li>
            </ol>

            <h3>&sect;2. Postanowienia wstępne</h3>

            <ol>
                <li>Za pośrednictwem Sklepu, Dietetyk zapewnia Klientowi możliwość zawarcia umowy o
                    dostarczenie treści cyfrowych, świadczenia usług z zakresu planowania żywieniowego oraz
                    suplementacji, współpracy online, a także innych produktów opisanych na stronach Sklepu.
                </li>
                <li>Regulamin określa zasady i warunki korzystania ze Sklepu i strony, a także prawa i obowiązki Dietetyka i Klientów.</li>
                <li>Do korzystania ze Sklepu nie jest konieczne spełnienie szczególnych warunków technicznych przez komputer lub inne urządzenie Klienta. Wystarczające są:</li>
                <ul>
                    <li>Dostęp do Internetu,</li>
                    <li>Standardowy system operacyjny,</li>
                    <li>Standardowa przeglądarka internetowa,</li>
                    <li>Posiadanie aktywnego adresu e-mail.</li>
                </ul>
                <li>Klient nie może dokonać zakupu w Sklepie anonimowo ani pod pseudonimem.</li>
                <li>Zakazane jest podczas korzystania ze Sklepu dostarczanie treści o charakterze bezprawnym, w szczególności poprzez przesyłanie takich treści za pośrednictwem formularzy dostępnych w Sklepie.</li>
                <li>Wszystkie ceny produktów podane na stronach Sklepu są cenami brutto.</li>
            </ol>

            <h3>&sect;3. Usługi świadczone drogą elektroniczną</h3>

            <ol>
                <li>Za pośrednictwem Sklepu, Dietetyk świadczy na rzecz Klienta usługi drogą elektroniczną.</li>
                <li>Podstawową usługą świadczoną drogą elektroniczną na rzecz Klienta przez Dietetyka jest umożliwienie Klientowi złożenia zamówienia w Sklepie prowadzącego do zawarcia z Dietetykiem umowy. Złożenie zamówienia możliwe jest z koniecznością posiadania konta w Sklepie.</li>
                <li>Usługi świadczone są drogą elektroniczną na rzecz Klienta nieodpłatnie. Odpłatne są natomiast umowy sprzedaży, umowy o dostarczenie treści cyfrowych zawierane za pośrednictwem Sklepu, a także umowy o świadczenie usług.</li>
                <li>W celu zapewnienia bezpieczeństwa Klientowi i przekazania danych w związku z korzystaniem ze Sklepu, Dietetyk podejmuje środki techniczne i organizacyjne odpowiednie do stopnia zagrożenia bezpieczeństwa świadczonych usług, w szczególności środki służące zapobieganiu pozyskiwania i modyfikacji danych osobowych przez osoby nieuprawnione.</li>
                <li>Dietetyk podejmuje działania w celu zapewnienia w pełni poprawnego funkcjonowania Sklepu. Klient powinien poinformować Dietetyka o wszelkich nieprawidłowościach lub przerwach w funkcjonowaniu Sklepu.</li>
                <li>Wszelkie reklamacje związane z funkcjonowaniem Sklepu, Klient może zgłaszać za pośrednictwem poczty elektronicznej na adres e-mail zdrowysukcesdietetyka&#64;gmail.com. W reklamacji Klient powinien podać imię i nazwisko, adres do korespondencji, a także rodzaj i datę wystąpienia nieprawidłowości związanej z funkcjonowaniem Sklepu. Dietetyk będzie rozpatrywać wszelkie reklamacje w terminie do 14 dni od otrzymania reklamacji i poinformuje Klienta o jej rozstrzygnięciu na adres e-mail składającego reklamację.</li>
            </ol>

            <h3>&sect;4. Składanie zamówienia</h3>

            <ol>
                <li>Złożenie zamówienia odbywa się poprzez wypełnienie formularza zamówienia. W formularzu konieczne jest podanie danych niezbędnych do realizacji zamówienia. Na etapie składania zamówienia następuje również wybór metody płatności za zamówienie. Warunkiem złożenia zamówienia jest akceptacja Regulaminu, z którym Klient powinien uprzednio się zapoznać. W razie jakichkolwiek wątpliwości dotyczących regulaminu, Klient może skontaktować się z Dietetykiem.</li>
                <li>Po kliknięciu w przycisk finalizujący zamówienie Klient zostanie przekierowany do bramki płatności, zgodnie z wybraną metodą płatności na stronie <Link href="https://www.1koszyk.pl/" rel="noreferrer noopener">https://www.1koszyk.pl/</Link>. Po skutecznym dokonaniu płatności, Klient zostanie zwrotnie przekierowany na stronę Sklepu z potwierdzeniem zamówienia. Z tą chwilą umowę uważa się za zawartą pomiędzy Klientem a Dietetykiem. Potwierdzenie zawarcia umowy zostanie przesłane Klientowi na adres e-mail podany w formularzu zamówienia.</li>
                <li>W zależności od przedmiotu zamówienia, między Klientem a Dietetykiem może zostać zawarta umowa określonego rodzaju:
                    W zależności od przedmiotu zamówienia, między Klientem a Dietetykiem może zostać zawarta umowa określonego rodzaju:</li>
                <ul>
                    <li>W przypadku produktów elektronicznych – umowa o dostarczenie treści cyfrowych,</li>
                    <li>W przypadku konsultacji dietetycznej- umowa o świadczenie usług.</li>
                </ul>
                <li>W formularzu zamówienia Klient musi podać prawdziwe dane osobowe. Klient ponosi odpowiedzialność za podanie nieprawdziwych danych osobowych. Dietetyk zastrzega sobie prawo do wstrzymania realizacji zamówienia w sytuacji, gdy Klient podał nieprawdziwe dane lub gdy dane te budzą uzasadnione wątpliwości Dietetyka co do ich poprawności. W takim przypadku Klient zostanie poinformowany telefonicznie lub poprzez pocztę elektroniczną o wątpliwościach Dietetyka. W takiej sytuacji Klientowi przysługuje prawo wyjaśnienia wszelkich okoliczności związanych z weryfikacją prawdziwości podanych danych. W przypadku braku danych pozwalających Dietetykowi na podjęcie kontaktu z Klientem, Dietetyk udzieli wszelkich wyjaśnień po podjęciu kontaktu przez Klienta.</li>
                <li>Klient oświadcza, że wszelkie dane podane przez niego w formularzu zamówienia są prawdziwe, natomiast Dietetyk nie jest zobowiązany do weryfikowania ich prawdziwości i poprawności, choć posiada takie uprawnienie zgodnie z ust. 4 powyżej.</li>

            </ol>

            <h3>&sect;5. Konsultacje dietetyczne</h3>

            <ol>
                <li>
                    W ramach Sklepu, Klient ma możliwość wybrania konsultacji:
                    <ul>
                        <li>
                            Online
                            <ol>
                                <li> Klient wykupuje konsultację lub współpracę dietetyczną.</li>
                                <li>Kupujący wypełnia kwestionariusz zdrowotno-żywieniowy oraz wykonuje sugerowane badania diagnostyczne oraz rezerwuje dogodny dla niego termin.</li>
                                <li>Kupujący przesyła podane dokumenty na adres e-mail dietetyka zdrowysukcesdietetyka&#64;gmail.com</li>
                            </ol>
                        </li>
                    </ul>
                </li>
                <li>Dietetyk posiada odpowiednie kwalifikacje do udzielania świadczeń zdrowotnych
                    oraz posiada kwalifikacje do udzielania świadczeń zdrowotnych w dziedzinie
                    medycyny.</li>
                <li>Klient jest świadomy, że usługi świadczone przez Dietetyka nie dają gwarancji uzyskania
                    założonych i oczekiwanych przez Klienta skutków.
                </li>
                <li>Dietetyk nie ponosi odpowiedzialności za wszystkie skutki wynikające
                    z nieodpowiedniego stosowania planu żywieniowego i suplementacji
                    przygotowanej przez Dietetyka. Klient jest świadomy, że niestosowanie się przez
                    niego lub wybiórcze stosowanie się do uzyskanych zaleceń może przynieść
                    negatywny skutek pod kątem stanu zdrowia, a nawet życia. </li>
                <li>Klient jest również świadomy, że zatajanie informacji bądź podanie
                    nieprawdziwych informacji na temat swojego stanu zdrowia, stylu życia,
                    przyjmowanych leków czy suplementów może negatywnie wpłynąć na
                    stan zdrowia. Dietetyk nie ponosi za to odpowiedzialności.</li>
                <li>Ryzyko wystąpienia efektów ubocznych jest znikome, jednak Dietetyk nie jest w
                    stanie przewidzieć wszystkich możliwych przeciwwskazań przy stosowaniu danej
                    suplementacji i sposobu żywienia, dlatego Dietetyk nie bierze odpowiedzialności
                    za negatywne skutki ich stosowania.</li>
                <li>Wszystkie informacje, które Dietetyk uzyskuje w trakcie świadczenia Usług
                    dla Klienta, objęte są tajemnicą bezterminowo i nie są przekazywane osobom
                    trzecim</li>
                <li>Warunkiem przystąpienia do współpracy z Dietetykiem jest zaakceptowanie
                    Regulaminu.</li>
            </ol>

            <h3>&sect;6. Dostawa i płatność</h3>

            <ol>
                <li> Dostępne metody płatności za zamówienie opisane są na stronach Sklepu oraz prezentowane
                    są Klientowi na etapie składania zamówienia.
                </li>
                <li>Płatności na konto bankowe nr: 69 1020 5385 0000 9802 0137 9551</li>
                <li>W przypadku planu dietetycznego, zostanie on dostarczony po wypełnieniu Kwestionariusza
                    zdrowotno-żywieniowego, który wypełnia Klient oraz wykonania sugerowanych badań
                    diagnostycznych, jeśli będzie to konieczne.</li>
                <li>Dieta zostanie wysyłana Klientowi do 7 dni roboczych od otrzymania wpłaty, od konsultacji
                    lub od odesłania kwestionariusza żywieniowego (brany pod uwagę jest termin ostatniego
                    spełnionego warunku).</li>
                <li>Konsultacja zostanie przeprowadzona w ciągu 2 miesięcy od wykupienia produktu w sklepie dietetyka.</li>
            </ol>

            <h3>&sect;7. Prawa i obowiązki Klienta</h3>

            <ol>
                <li>Klient udziela Dietetykowi wszelkich niezbędnych informacji celem sporządzenia wywiadu zdrowotno- żywieniowego, który jest niezbędny do ułożenia przez Dietetyka prawidłowej diety i ustalenia odpowiednich zaleceń dietetycznych.</li>
                <li>Klient w trakcie korzystania z usług Dietetyka zobowiązany jest podawać Dietetykowi wyłącznie prawdziwe dane oraz każdorazowo informować Dietetyka o ich zmianach.</li>
                <li>
                    Dokumentacja zwrotna, którą należy odesłać do dietetyka w celu  przeprowadzenia konsultacji powinna być odesłana na 4 dni przed planowaną konsultacją. Dokumentacja powinna być uzupełniona w formacie WORD, PDF, przesłanie dokumentacji pisanej odręcznie nie jest przyjmowane i nie będzie podlegać weryfikacji.
                </li>
                <li>
                    Dokumenty powinny być przesłane tak, aby umożliwiały odczyt, bez śladów cieni, rozmazanego tekstu w trakcie robienie zdjęć badań.
                </li>
                <li>Brak kompletu dokumentacji w terminie skutkuje wyznaczeniem nowego terminu, który ustala Dietetyk, nie później niż na dzień przed planowaną konsultacją.</li>
                <li>Brak dokumentacji w terminie 2-krotnie lub niepojawienie się Klienta na konsultacji bez wcześniejszego zgłoszenia, będzie traktowane jako konsultacja, która się odbyła.</li>
                <li>Dietetyk nie zajmuje się weryfikacją poprawności wysłanych dokumentów i przypominaniem klientowi o konieczności wysłania całej dokumentacji w wyznaczonym terminie – takie obowiązki należą do klienta</li>
                <li>W przypadku udzielenia przez Klienta niepełnej lub nieprawdziwej informacji dotyczącej jego stanu zdrowia a także nie poinformowania o zmianie stanu zdrowia, Dietetyk nie ponosi odpowiedzialności za następstwa stosowania przez Klienta ułożonej diety i zaleceń.</li>
                <li>W przypadku jakichkolwiek wątpliwości Klient przed rozpoczęciem diety powinien skonsultować możliwość jej stosowania ze swoim lekarzem. W razie uzasadnionej potrzeby Klient kontaktuje się z Dietetykiem za pomocą poczty e-mail.</li>
                <li> Współpraca w trakcie jej trwania nie polega zawieszeniu na życzenie klienta.</li>
                <li>Klient ma obowiązek poinformować o wszelkich problemach zdrowotnych pojawiających się w trakcie stosowania się do zaleceń.
                    W przypadku gdy Klient  osiagnie zamierzone efekty i będzie chciał pochwalić się metamorfozą, może to zrobić kontaktując się z Dietetykiem.
                </li>
                <li>Jest to równoznaczne ze zgodą Pacjenta na jego umieszczenie w  mediach społecznościowych takich  jak Facebook czy Instagram, bez danych wrażliwych.
                </li>
                <li>Konsultacja dietetyczna nie może zastąpić wizyty u lekarza w przypadku zdiagnozowanych schorzeń, a Klient ma obowiązek skonsultować się z lekarzem przed przystąpieniem do realizacji zaleceń dietetycznych.</li>
            </ol>

            <h3>&sect;8. Produkty elektroniczne</h3>

            <ol>
                <li>Realizacja zamówienia obejmującego produkt elektroniczny taki jak jadłospis online itp.
                    następuje poprzez przesłanie na adres e-mail podany przez Klienta w formularzu zamówienia
                    wiadomości zawierającej instrukcję pobrania lub uzyskania dostępu do zakupionego produktu
                    elektronicznego.
                </li>
                <li>Z chwilą wysyłki wiadomości, o której mowa w ust. 1 powyżej, treści cyfrowe objęte
                    przedmiotem zamówienia uważa się za dostarczone w całości Klientowi.</li>
                <li>W odniesieniu do jadłospisów online i innych produktów elektronicznych nie przysługuje
                    prawo do odstąpienia od umowy oraz zwrotu produktu zgodnie z postanowieniami &sect;8.</li>
            </ol>

            <h3>&sect;9. Prawa własności intelektualnej</h3>

            <ol>
                <li>Dietetyk poucza niniejszym Klienta, że treści zawarte w Sklepie oraz produkty elektroniczne objęte są ochroną prawa autorskiego.</li>
                <li>Prawa autorskie majątkowe i osobiste co do produktów i treści dystrybuowanych za pomocą
                    Serwisu należą do Dietetyka.</li>
                <li>Bezprawne rozpowszechnianie treści lub materiałów, o których mowa w ust. 1 powyżej, może
                    skutkować odpowiedzialnością cywilną lub karną.</li>
            </ol>

            <h3>&sect;10. Odstąpienie od umowy Konsumenta</h3>

            <ol>
                <li>Konsument, który zawarł ze Dietetyka umowę na odległość, ma prawo odstąpić od umowy bez
                    podawania przyczyny w terminie 14 dni od dnia zawarcia umowy (w przypadku umowy o
                    dostarczenie treści cyfrowych).</li>
                <li>Prawo do odstąpienia od umowy nie przysługuje w odniesieniu do umów o dostarczanie treści
                    cyfrowych, które nie są zapisane na nośniku materialnym, jeżeli spełnianie świadczenia
                    rozpoczęło się za wyraźną zgodą Konsumenta przed upływem terminu do odstąpienia od
                    umowy i po poinformowaniu go przez Dietetyka o utracie prawa odstąpienia od umowy.</li>
                <li>Prawo do odstąpienia od umowy nie przysługuje również, w odniesieniu do produktów
                    przygotowywanych na specjalne zamówienie Konsumenta oraz według osobistych preferencji.</li>
                <li>Chwilą rozpoczęcia świadczenia jest doręczenie Klientowi wiadomości e-mail z instrukcją
                    uzyskania dostępu do treści cyfrowych.</li>
                <li>Aby odstąpić od umowy, Konsument musi poinformować Dietetyka o swojej decyzji o
                    odstąpieniu od umowy w drodze jednoznacznego oświadczenia - na przykład pismo wysłane
                    pocztą, faksem lub pocztą elektroniczną.</li>
                <li>Aby zachować termin do odstąpienia od umowy, wystarczy, aby Konsument wysłał informację
                    dotyczącą wykonania przysługującego Konsumentowi prawa odstąpienia od umowy przed
                    upływem terminu do odstąpienia od umowy.</li>
            </ol>

            <h3>&sect;11. Odpowiedzialność za wady</h3>

            <ol>
                <li>Dietetyk ma obowiązek dostarczyć Klientowi treść cyfrową wolną od wad.</li>
                <li>Dietetyk jest odpowiedzialny względem Klienta, jeżeli sprzedana treść cyfrowa ma wadę
                    fizyczną lub prawną (rękojmia za wady).</li>
                <li>Jeśli Klient stwierdzi wadę treści cyfrowej, powinien poinformować o tym Dietetyka,
                    określając jednocześnie swoje roszczenie związane ze stwierdzoną wadą lub składając
                    oświadczenie stosownej treści.</li>
                <li>Klient może kontaktować się ze Dietetyka zarówno pocztą tradycyjną, jak również pocztą
                    elektroniczną.</li>
                <li>Dietetyk ustosunkuje się do składanej przez Klienta reklamacji w ciągu 14 dni od dnia
                    doręczenia mu reklamacji za pomocą takiego środka komunikacji, przy wykorzystaniu którego
                    reklamacja została złożona.</li>
                <li>Dietetyk nie ponosi odpowiedzialności za konsekwencje związane z podaniem przez Klienta
                    niepełnych błędnych informacji o stanie zdrowia, zatajenia istotnych faktów, bądź
                    nieprzedstawienia wszystkich wymaganych dokumentów, a także wyników badań czy też
                    niestosowanie zaleceń podczas konsultacji dietetycznej.
                </li>
                <li>Konsultacja dietetyczna nie stanowi udzielenia pomocy, porady lub opinii lekarskiej, ani
                    orzeczenia o stanie zdrowia w rozumieniu Ustawy o Zawodzie Lekarza. Konsultacja
                    dietetyczna nie stanowi także działalności leczniczej ani świadczenia zdrowotnego w
                    rozumieniu art. 3 ust. 1 Ustawy o Działalności Leczniczej. Konsultacja dietetyczna ma
                    charakter informacyjny i edukacyjny oraz ma na celu promocję zdrowego stylu życia.
                </li>
                <li>Konsultacja dietetyczna nie zastępuje bezpośredniej wizyty u lekarza. Jeżeli istnieją
                    wątpliwości co do stanu zdrowia oraz ewentualnych przeciwwskazań do stosowania zaleceń
                    dietetyka, na którymkolwiek z etapów należy zasięgnąć opinii lekarza. Zaleca się, aby przed
                    przystąpieniem do jakiejkolwiek aktywności ruchowej oraz przed zastosowaniem
                    jakiegokolwiek programu dietetycznego, zasięgnąć porady lekarza. Dieta i suplementacja mają
                    na celu procesu leczniczego czy też zdrowego trybu życia, nie mogą zastąpić Klientowi
                    konsultacji u lekarza specjalisty czy leków.</li>
            </ol>

            <h3>&sect;12. Dane osobowe i pliki cookies</h3>

            <ol>
                <li>Administratorem danych osobowych Klienta jest Dietetyk.</li>
                <li>Dane osobowe Klienta przetwarzane są w celu obsługi zamówień, konta użytkownika oraz
                    ewentualnej obrony, dochodzenia lub ustalenia roszczeń związanych z zawieranymi za
                    pośrednictwem Sklepu umowami.</li>
                <li>Szczegóły dotyczące przetwarzania danych osobowych oraz wykorzystywania plików cookies
                    znajdują się w polityce prywatności dostępnej pod adresem <Link href="https://zdrowy-sukces.pl/polityka-prywatnosci" rel="noreferrer noopener">https://zdrowy-sukces.pl/polityka-prywatnosci</Link></li>
            </ol>

            <h3>&sect;13. Pozasądowe sposoby rozpatrywania reklamacji i dochodzenia roszczeń</h3>

            <ol>
                <li>Dietetyk wyraża zgodę na poddanie ewentualnych sporów wynikłych w związku z zawartymi umowami na drodze postępowania mediacyjnego. Szczegóły zostaną określone przez strony konfliktu.</li>
                <li>Konsument ma możliwość skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń. Między innymi, Konsument ma możliwość:</li>
                <li>zwrócenia się do stałego polubownego sądu konsumenckiego z wnioskiem o rozstrzygnięciu sporu wynikłego z zawartej umowy,</li>
                <li> Zwrócenia się do wojewódzkiego inspektora Inspekcji Handlowej z wnioskiem o wszczęcie postępowania mediacyjnego w sprawie polubownego zakończenia sporu między Klientem a Dietetyka,</li>
                <li>Skorzystania z pomocy powiatowego (miejskiego) rzecznika prawa konsumenta lub organizacji społecznej, do której statutowych zadań należy ochrona konsumentów.</li>
                <li>Bardziej szczegółowych informacji na temat pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń, Konsument może szukać na stronie internetowej <a href="https://polubowne.uokik.gov.pl/" rel="noreferrer noopener">https://polubowne.uokik.gov.pl/</a>.</li>
                <li>Konsument może również skorzystać z platformy ODR, która dostępna jest pod adresem <Link href="http://ec.europa.eu/consumers/odr" rel="noreferrer noopener">http://ec.europa.eu/consumers/odr</Link>. Platforma służy rozstrzyganiu sporów pomiędzy konsumentami i przedsiębiorcami dążącymi do pozasądowego rozstrzygnięcia sporu dotyczącego zobowiązań umownych wynikających z internetowej umowy sprzedaży lub umowy o świadczenie usług.</li>
            </ol>

            <h3>&sect;14. Postanowienia końcowe</h3>

            <ol>
                <li>Dietetyk zastrzega sobie prawo do wprowadzania oraz odwoływania ofert, promocji oraz do zmiany cen w Sklepie bez uszczerbku dla praw nabytych przez Klienta, w tym w szczególności warunków umów zawartych przed dokonaniem zmiany.</li>
                <li>Wszelkie spory związane z umowami zawieranymi za pośrednictwem Sklepu będą rozpatrywane przez polski sąd powszechny właściwy ze względu na stałe miejsce wykonywania działalności gospodarczej przez Dietetyka. Postanowienie to nie znajduje zastosowania do Konsumentów, w przypadku których właściwość oraz jurysdykcja sądu rozpatrywane są na zasadach ogólnych.</li>
                <li>Dietetyk zastrzega sobie możliwość wprowadzania zmian w Regulaminie. Do umów zawartych przed zmianą Regulaminu stosuje się Regulamin obowiązujący w dacie zawarcia umowy.</li>
                <li>Niniejszy Regulamin obowiązuje od dnia 1.01.2023 r.</li>
            </ol>
      </Layout>
}