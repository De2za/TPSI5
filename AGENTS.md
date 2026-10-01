# Istruzioni per lavorare nella repository

Questa repository raccoglie materiale di TPSI della classe 5AI.

## Organizzazione obbligatoria

- Usa le sezioni `Compiti`, `Esercizi in presenza`, `Preparazione Verifiche` e `Teoria`.
- Inserisci ogni attività nel percorso `Tipologia/Argomento/Nome/`.
- Tutti i file di un'attività devono stare nella sua cartella `Nome`.
- Non inventare consegne, soluzioni o contenuti didattici quando viene richiesta soltanto la struttura.

## Indipendenza delle attività

- Ogni cartella `Nome` costituisce un progetto indipendente, con eventuali manifest, lockfile, dipendenze, risorse e comandi propri.
- Non aggiungere build aggregate, progetti radice, workspace npm, Maven multi-modulo o riferimenti TypeScript tra attività.
- Non compilare né eseguire automaticamente altre attività per avviare quella richiesta.
- Errori in un'attività possono bloccare quella stessa attività, ma non un'altra. Mantieni separati anche porte, dati e configurazioni quando necessario.
- Quando lavori su un'attività, esegui i suoi comandi dalla sua cartella. Segnala i suoi errori senza richiedere la correzione di attività estranee.

## Compatibilità e documentazione

- Usa strutture e strumenti standard del linguaggio, indipendenti da IntelliJ IDEA, WebStorm e Visual Studio Code.
- Documenta nel `README.md` dell'attività i requisiti e i comandi di installazione, avvio e verifica.
- Non versionare configurazioni IDE personali, credenziali, dipendenze scaricate o risultati delle compilazioni.
- Conserva e versiona i manifest, i lockfile e le risorse necessarie.
- In un task cloud usa il checkout esistente: non creare worktree senza una richiesta esplicita dell'utente.
