import Link from 'next/link';
import styles from './privacySection.module.scss';
import { Layout } from '../layout/ComponentLayout';
export const PrivacySection = () => {
    return <Layout id={'privacy'} bg={styles.background} extendWrapper={styles.extendWrapper}>
        <h1>Polityka Prywatności i plików cookies</h1>

        <h2><Link href="https://zdrowy-sukces.pl/" rel="noreferrer noopener">www.zdrowy-sukces.pl</Link></h2>

        <p>Przedstawię Ci zasady dotyczące przetwarzania danych w ramach newslettera oraz strony www.zdrowy-sukces.pl</p>

        <h3>Kto przetwarza Twoje dane:</h3>

        <p><b>Administrator</b> - czyli ja, Patrycja Marszalec, prowadzącą działalność gospodarczą wpisaną do CEIDG pod nazwą Zdrowy Sukces Patrycja Marszalec, Luchów Górny 60, 23-420 Tarnogród, NIP: 9182176228, REGON: 520895069, tel: 883-213-756</p>

        <h3>W jakim celu przetwarzam Twoje dane?</h3>

        <p>Twoje dane osobowe (w tym adres IP lub inne informacje gromadzone za pośrednictwem plików cookies), przetwarzane są przez Administratora:</p>

        <ul className={styles.list}>
            <li>
                w celu świadczenia usług drogą elektroniczną w zakresie udostępniana
                Użytkownikom treści gromadzonych w Serwisie – wówczas podstawą
                prawną przetwarzania jest niezbędność przetwarzania do wykonania
                umowy (art. 6 ust. 1 lit b RODO);
            </li>
            <li>w celu ewentualnego ustalenia i dochodzenia roszczeń lub obrony przed
                nimi – podstawą prawną przetwarzania jest uzasadniony interes prawny
                (art. 6 ust. 1 lit f RODO);</li>
            <li>
                w celu przesyłania informacji handlowych za pomocą newslettera
                podstawą prawną przetwarzania jest zgoda Użytkownika (art. 6 ust. 1
                lit. a RODO)
            </li>
        </ul>

        <h3>Newsletter</h3>

        <p>Administrator przetwarza dane osobowe Użytkowników w celu realizowania działań marketingowych, które mogą polegać na przesyłaniu Użytkownikowi treści marketingowych odpowiadających jego zainteresowaniom (newsletter);</p>

        <p>W tym celu po uprzedniej zgodzie wyrażonej przez użytkownika na etapie potwierdzenia adresu mailowego, dane osobowe Użytkownika podane w Serwisie takie jak imię oraz adres email zostaną przekazane do partnera Administratora – mailerlite.com w celu przesłania wiadomości mailowej zawierającej treści interesujące Użytkownika.</p>

        <p>Administrator nie podejmuje decyzji automatycznych w stosunku do Użytkownika oraz dane osobowe Użytkownika nie podlegają profilowaniu.</p>

        <h3>Ciasteczka</h3>

        <p>Serwis Administratora używa plików „cookies”. Brak zmiany ustawień przeglądarki po stronie Czytelnika jest równoznaczny z wyrażeniem zgody na ich użycie. Są to krótkie informacje tekstowe, zapisywane na komputerze, telefonie, tablecie, czy też innym urządzeniu użytkownika. Mogą być one odczytywane przez Administratora, a także przez systemy należące do innych podmiotów, z których usług korzysta (takich jak Google). Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer. Więcej informacji na temat plików cookies można uzyskać na stronie <Link href="https://allaboutcookies.org/" rel="noreferrer noopener"> https://allaboutcookies.org/</Link>.</p>

        <p>Jeżeli wyłączysz lub ograniczysz obsługę plików cookies to strona może działać gorzej lub niektóre z funkcji zostaną poza Twoim zasięgiem.</p>

        <h3>Jak długo będą przetwarzane dane?</h3>

        <p>W zależności od podstawy ich przetwarzania i pochodzenia tych danych, co do zasady dane przetwarzane są przez czas świadczenia usługi lub realizowania zamówienia, do czasu wycofania wyrażonej zgody lub zgłoszenia skutecznego sprzeciwu względem przetwarzania danych w przypadkach, gdy podstawą prawną przetwarzania danych jest uzasadniony interes Administratora. Okres ten może zostać wydłużony jedynie, jeżeli zobowiąże mnie do tego przepis lub też organ państwowy.</p>

        <p>Po upływie okresu przetwarzania dane są nieodwracalnie usuwane lub anonimizowane.</p>

        <h3>Co możesz zrobić w zakresie przetwarzania danych?</h3>

        <p>Masz prawo do:</p>

        <ul className={styles.alphabet}>
            <li>dostępu do treści danych oraz żądania ich sprostowania, </li>
            <li>usunięcia danych, </li>
            <li>ograniczenia przetwarzania</li>
            <li>prawo do przenoszenia danych,</li>
            <li>prawo wniesienia sprzeciwu względem przetwarzania danych,</li>
            <li>prawo wniesienia skargi do organu nadzorczego- Prezesa Urzędu Ochrony Danych Osobowych ul. Stawki 2, 00-193 Warszawa</li>
        </ul>

        <p>Jeżeli dane przetwarzane są na podstawie zgody, to w każdej chwili możesz ją wycofać.</p>

        <p>Masz prawo zgłoszenia sprzeciwu względem przetwarzania danych dla celów marketingowych, jeśli przetwarzanie odbywa się w związku z uzasadnionym interesem Administratora, a także – z przyczyn związanych ze szczególną sytuacją Użytkownika w innych przypadkach, gdy podstawą prawną przetwarzania danych jest uzasadniony interes Administratora (np. w związku z realizacją celów analitycznych i statystycznych).</p>

        <h3>Z kim się dzielę danymi?</h3>

        <p>Administrator zastrzega sobie prawo ujawnienia wybranych informacji dotyczących Użytkownika właściwym organom bądź osobom trzecim, które zgłoszą żądanie udzielenia takich informacji, opierając się na odpowiedniej podstawie prawnej oraz zgodnie z przepisami obowiązującego prawa.</p>

        <h3>Przekazanie danych Poza Europejski Obszar Gospodarczy</h3>

        <p>W celu obsługi strony udostępniam Twoje dane dostawcom narzędzi. Za każdym razem jednak jesteś informowany o zakresie przekazania danych oraz momencie ich przekazania do podmiotów trzecich. Podmioty te mogą mieć siedzibę w ramach Europejskiego Obszaru Gospodarczego lub też poza nim:</p>

        <p>W ramach EOG:</p>

        <p className={styles.margin}>Dla MailerLite- dostarczający narzędzie newslettera. Zbierane dane identyfikują użytkownika w ramach podanego adresu mailowego oraz imienia. Więcej informacji o standardach prywatności narzędzie dostępne jest pod linkiem: <Link href="https://www.mailerlite.com/legal/privacy-policy" rel="noreferrer noopener">https://www.mailerlite.com/legal/privacy-policy</Link>.</p>

        <p className={styles.margin}>Dla Hotjar Ltd.- dostarczający rozwiązanie służące do monitorowania aktywności użytkownika na stronie w ramach tzw. Heatmap. Zbierane dane uniemożliwiają identyfikację konkretnej osoby, a więcej informacji o standardach prywatności narzędzia dostępne jest pod linkiem <Link href="https://www.hotjar.com/legal/policies/privacy/" rel="noreferrer noopener">https://www.hotjar.com/legal/policies/privacy/</Link>.
        </p>

        <p>Poza EOG:</p>

        <p className={styles.margin}>W związku z tym, że niektóre podmioty współpracujące z Administratorem mają siedziby poza Unią Europejską, a zatem w świetle przepisów RODO są traktowane jako tzw. państwa trzecie. Dane są przekazywane podmiotom ze Stanów Zjednoczonych, które zapewniają odpowiednie standardy przetwarzania danych:</p>

        <p className={styles.margin}>Dla Google Inc.- dostarczający rozwiązanie Google Analytics służące do monitorowania ruchu strony. Zbierane dane uniemożliwiają identyfikację konkretnej osoby, a więcej informacji o standardach prywatności narzędzia dostępne jest pod linkiem <Link href="https://policies.google.com/technologies/partner-sites?hl=pl" rel="noreferrer noopener">https://policies.google.com/technologies/partner-sites?hl=pl</Link>. Ponadto korzystając z poniższego linku: <Link href="https://tools.google.com/dlpage/gaoptout" rel="noreferrer noopener">https://tools.google.com/dlpage/gaoptout</Link> istnieje możliwość wyłączenia aktywności mierzonej przez Google Analytics.</p>

        <p className={styles.margin}>Dla Facebook Inc. dostarczający rozwiązanie Facebook Pixel służące do monitorowania ruchu strony. –Zbierane dane co do zasady uniemożliwiają identyfikację konkretnej osoby, a więcej informacji o standardach prywatności narzędzia dostępne jest pod linkiem <Link href="https://developers.facebook.com/docs/privacy/" rel="noreferrer noopener">https://developers.facebook.com/docs/privacy/</Link></p>
    </Layout>
}