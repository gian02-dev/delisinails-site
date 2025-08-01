//Oggetto che funge da database per la lista delle cards del sito
const CardsList = [
  {
    titolo: "RICOSTRUZIONE",
    immagine: "/french/1.JPG",
    testo:
      "La ricostruzione unghie è un vero e proprio allungamento dell’unghia naturale, realizzato tramite l’utilizzo delle nail form, per ottenere una forma armoniosa e resistente",
    testoButton: "PRENOTA",
    buttonYes: true,
  },
  {
    titolo: "REFILL",
    immagine: "/french/1.JPG",
    testo:
      "Il refill è il trattamento di mantenimento della ricostruzione. Si esegue ogni 3-4 settimane per riempire la ricrescita dell’unghia e mantenerla sempre perfetta",
    testoButton: "PRENOTA",
    buttonYes: true,
  },
  {
    titolo: "SEMIPERMANENTE",
    immagine: "/french/1.JPG",
    testo:
      "Il semipermanente è la soluzione ideale per chi desidera unghie curate e brillanti, senza ricostruzione. Viene applicato come uno smalto, ma ha la durata di circa 2-3 settimane",
    testoButton: "PRENOTA",
    buttonYes: true,
  },
  {
    titolo: "SEMIPERMANENTE RINFORZATO",
    immagine: "/french/1.JPG",
    testo:
      "Il semipermanente rinforzato è una via di mezzo tra lo smalto semipermanente classico e il gel. Offre un risultato naturale ma più resistente, ideale per chi ha unghie corte. Grazie a una base più strutturata, garantisce una durata maggiore e unghie sempre perfette fino a 3 settimane",
    testoButton: "PRENOTA",
    buttonYes: true,
  },
  {
    titolo: "COPERTURA IN GEL",
    immagine: "/french/1.JPG",
    testo:
      "La copertura in gel rinforza l’unghia naturale senza allungarla. È perfetta per chi ha unghie fragili o che si spezzano facilmente, e desidera una manicure ordinata, resistente e duratura",
    testoButton: "PRENOTA",
    buttonYes: true,
  },
  {
    titolo: "RECUPERO LATERALI",
    immagine: "/french/1.JPG",
    testo:
      "Il recupero laterali è un trattamento mirato per ripristinare la forma e la salute delle unghie che presentano difetti o danneggiamenti sui lati. Questo servizio è particolarmente utile per chi ha unghie con i lati fragili, spezzati o che crescono in modo irregolare. Grazie a tecniche specifiche, come l’utilizzo di materiali rinforzanti o, si riesce a ripristinare la simmetria e a rinforzare l’intera struttura dell’unghia, migliorando sia l’estetica che la resistenza.",
    testoButton: "PRENOTA",
    buttonYes: true,
  },
  {
    titolo: "FRENCH IN SUPERFICIE",
    immagine: "/french/1.JPG",
    testo:
      "La French in superficie è una delle tecniche più richieste per un look elegante e intramontabile. Si realizza al termine della struttura (gel, semipermanente, acrygel). Richiede manualità, attenzione al dettaglio e una formazione professionale, risultando un vero valore aggiunto per chi desidera una manicure curata in ogni aspetto",
    testoButton: "PRENOTA",
    buttonYes: true,
  },
  {
    titolo: "FRENCH IN STRUTTURA",
    immagine: "/french/1.JPG",
    testo:
      "La French strutturale è una tecnica avanzata che prevede la realizzazione della lunetta direttamente durante la fase di costruzione dell’unghia. Rispetto alla French in superficie, offre una precisione impeccabile e un risultato più pulito e professionale. Si usano brillantini , elementi glamour che trasformano le unghie in una vera e propria opera d’arte.  Richiede una formazione specifica e precisione tecnica, ed è considerata un servizio premium nel mondo nails. Amo questa tecnica per la sua profondità , le sfumature e la creatività nel creare qualcosa  sempre più bello e particolari!",
    testoButton: "PRENOTA",
    buttonYes: true,
  },
  {
    titolo: "BABY BOOMER",
    immagine: "/french/1.JPG",
    testo:
      "Il Baby Boomer è una tecnica di nail art che crea un effetto sfumato delicato e naturale, perfetto per chi desidera un look elegante, sempre alla moda. Si caratterizza per una sfumatura morbida tra il rosa chiaro e il bianco o altri colori, che ricorda l’effetto naturale delle unghie curate. Questa tecnica, sia in superficie che in struttura, è particolarmente amata per il suo aspetto fresco e raffinato, ed è ideale sia per occasioni speciali che per l'uso quotidiano. Richiede una grande abilità nel mixare i colori e nel creare la sfumatura perfetta, e rappresenta una delle scelte più eleganti per una manicure che dura a lungo. ",
    testoButton: "PRENOTA",
    buttonYes: true,
  },
  {
    titolo: "NAIL ART MICROPITTURA",
    immagine: "/french/1.JPG",
    testo:
      "Quello che amo follemente del mio lavoro è l’essere creativi, e le nail art mi consentono di esserlo.  La micro pittura è una tecnica di nail art avanzata che permette di realizzare disegni minuziosi e dettagliati sulle unghie, creando effetti unici e personalizzati. Utilizzo pennelli sottilissimi e colori speciali per creare disegni intricati, come fiori, geometrie, paesaggi realistici, motivi astratti e molto altro, per un risultato artistico e raffinato. La nail art è perfetta per chi desidera personalizzare la propria manicure con colori vivaci, strass, paillettes o effetti 3D. Ogni design è pensato per rispecchiare il tuo stile e la tua personalità, rendendo ogni unghia un'opera d'arte. La micro pittura e la nail art sono ideali per occasioni speciali o per chi ama distinguersi con un tocco creativo e originale. Essendo un servizio che richiede un alto livello di formazione, competenza e precisione, la micro pittura e la nail art sono trattamenti esclusivi che garantiscono un risultato sorprendente e duraturo.",
    testoButton: "PRENOTA",
    buttonYes: true,
  },
  {
    titolo: "SEMIPERMANENTE PIEDI",
    immagine: "/french/1.JPG",
    testo:
      "Il semipermanente per i piedi è la soluzione ideale per avere unghie perfette e curate per settimane, senza sbeccature o necessità di ritocchi frequenti. Applicato come uno smalto, ma con una durata che arriva fino a 4 settimane, il semipermanente sui piedi offre un effetto lucido e resistente. È perfetto per chi desidera mani e piedi sempre impeccabili, con una vasta scelta di colori e finiture, dalle più naturali alle più vivaci. Nel trattamento è compresa la levigatura di zone secche o ispessite e un massaggio finale molto rilassante che dona leggerezza",
    testoButton: "PRENOTA",
    buttonYes: true,
  },
  {
    titolo: "DRY PEDICURE",
    immagine: "/french/1.JPG",
    testo:
      "Dry pedicure è un trattamento completo che si occupa della salute e dell'aspetto estetico dei piedi, senza ricorrere all'uso di lame. Questa tecnica prevede l'utilizzo di strumenti professionali sicuri e prodotti delicati, per rimuovere callosità, cuticole e pelle secca, senza danneggiare la pelle o causare irritazioni. Inizio con un bagno rilassante per ammorbidire la pelle, seguito da un scrub esfoliante per rimuovere cellule morte e callosità. Successivamente, applico una maschera nutriente per i piedi, per garantire un’idratazione profonda e rigenerante. A seguire, eseguo un'accurata rimozione delle cuticole e delle eventuali callosità con strumenti professionali, senza l’uso di lame, per una pelle liscia e sana. Infine, il trattamento si conclude con un massaggio rilassante, che dona benessere e leggerezza ai piedi. Per una coccola in più scegli il trattamento abbinato al semipermanente!",
    testoButton: "PRENOTA",
    buttonYes: true,
  },
];

export default CardsList;
