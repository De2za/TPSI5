# TPSI · 5AI

Repository per compiti, esercizi in presenza, preparazione alle verifiche e teoria.

## Struttura

Ogni attività segue lo stesso percorso:

```text
Tipologia/Argomento/Nome/file
```

Le quattro sezioni sono:

```text
TPSI5/
├── Compiti/
├── Esercizi in presenza/
├── Preparazione Verifiche/
└── Teoria/
```

Esempio di organizzazione quando aggiungerai le attività:

```text
Compiti/
└── HTTP/
    ├── Client HTTP/
    │   ├── README.md
    │   └── ...file del progetto...
    └── Server HTTP/
        ├── README.md
        └── ...file del progetto...

Teoria/
└── HTTP/
    └── Richieste e risposte/
        ├── appunti.md
        └── ...materiale dell'argomento...
```

Le sezioni iniziali contengono soltanto un `.gitkeep`, perché Git non conserva cartelle vuote. Puoi lasciarlo oppure rimuoverlo quando aggiungi materiale.

## Un progetto per attività

La cartella **Nome** è la radice di un progetto indipendente. Contiene tutti i sorgenti, le risorse, le dipendenze e la configurazione necessari per quella sola attività.

- Ogni progetto ha i propri manifest, lockfile, comandi di esecuzione e test, quando necessari.
- Installa le dipendenze ed esegui compilazione, test e avvio dalla cartella dell'attività scelta.
- Non creare un progetto globale alla radice: niente build aggregate, Maven multi-modulo, workspace npm o TypeScript project references che colleghino esercizi diversi.
- Mantieni eventuali configurazioni IDE dell'esercizio dentro la sua cartella; non creare dipendenze da altri esercizi.
- Un errore può impedire di eseguire i file della stessa attività, ma non deve entrare nella compilazione o nell'avvio di un'altra attività.

Per esempio, per lavorare sul client dell'esempio:

```sh
cd "Compiti/HTTP/Client HTTP"
```

Da qui esegui i comandi documentati nel suo `README.md`. La compilazione e l'esecuzione di `Server HTTP` devono essere possibili anche se `Client HTTP` contiene errori.

Se due attività avviano server contemporaneamente, assegna porte diverse e tieni separati dati e configurazioni locali.

## IntelliJ IDEA, WebStorm e Visual Studio Code

Puoi aprire l'intera repository per consultare e organizzare i materiali. Per compilare o eseguire un'attività, **apri la sua cartella Nome come progetto/cartella in una finestra dedicata**. È il modo comune ai tre IDE per mantenere separati configurazioni, dipendenze e risultati della compilazione.

| IDE | Uso del progetto dell'attività |
| --- | --- |
| IntelliJ IDEA | Apri la cartella dell'attività; importa il suo `pom.xml` o `build.gradle` se presente. Configura il JDK richiesto dall'attività. |
| WebStorm | Apri la cartella dell'attività; usa il suo `package.json` e configura il runtime Node.js richiesto. |
| Visual Studio Code | Apri la cartella dell'attività; installa le estensioni del linguaggio e usa il terminale nella stessa cartella. |

L'organizzazione dei file funziona con tutti e tre gli IDE. Il supporto per eseguire un linguaggio dipende dall'IDE: per esempio WebStorm è dedicato alle tecnologie web e non sostituisce IntelliJ IDEA per i progetti Java.

La repository non impone configurazioni specifiche di un IDE. File locali come `.idea`, `.vscode` e `*.iml` sono esclusi da Git; i manifest e i lockfile del progetto restano versionati.

## Aggiungere un'attività

1. Scegli una delle quattro sezioni.
2. Crea la cartella dell'argomento, se manca.
3. Crea al suo interno una cartella con il nome dell'attività.
4. Inserisci lì tutti i file e le eventuali configurazioni di progetto.
5. Aggiungi un `README.md` con consegna, requisiti, comandi di installazione, avvio e verifica.

Modello per il `README.md` di un'attività:

```markdown
# Nome dell'attività

## Consegna
Descrizione e obiettivi.

## Requisiti
Linguaggio, versione del runtime/JDK ed eventuali servizi richiesti.

## Installazione
Comandi da eseguire da questa cartella, se necessari.

## Avvio
Comando o configurazione per eseguire questa attività.

## Verifica
Test o risultato atteso; eventuali errori conosciuti.
```

Per materiale esclusivamente teorico puoi usare soltanto appunti e risorse, senza creare un progetto eseguibile.
