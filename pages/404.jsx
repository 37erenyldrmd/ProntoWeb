import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'yolunu mu kaybettin dostum?',
        'Kahretsin! Bu çıkmaz yol.',
        'Eren bu sayfayı kapattı, Coni!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Yanlış Sayfadasın Dostum."} />
}

export default UnkownPage;

