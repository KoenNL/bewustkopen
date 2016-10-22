# Bewust Kopen
Dit is de website voor Bewust Kopen.  

## Werkwijze
Alle handelingen met Git worden binnen NetBeans gedaan. Het is dus niet nodig om GitHub Desktop te gebruiken of de command-line.  

### Branch
Iedere ontwikkelaar heeft zijn eigen branch. De branch draagt de naam van de ontwikkelaar.  

### Commit
Wanneer je tevreden bent over wat je hebt gedaan kun je je wijzigingen vastleggen in een *commit*. Dit doe je door met de rechter muisknop op het project te klikken en te kiezen voor `Git->Commit`. Hier worden de gewijzigde bestanden weergegeven. Deze kunnen worden meegenomen in de commit door aan te vinken.  
Voeg ook een korte en duidelijke omschrijving in van de deze commit heeft veranderd.  
Klik vervolgens op *commit*.

### Push
Na een commit is het nodig om de wijzigingen naar GitHub te sturen. Klik met de rechter muisknop op het project en kies `Git->Remote->Push...`. Klik vervolgens op *Next*. Selecteer de branch die je wilt pushen. Dit zal jouw eigen branch zijn. Klik weer op *Next* en daarna op *Finish*. Je branch is nu naar GitHub verstuurd.  
### Pull request
Na een push moet je in GitHub een pull request aanmaken. Dit doe je op de web-interface van GitHub.  
Ga naar [GitHub](https://github.com/KoenNL/bewustkopen) en klik op *branches*. Zoek jouw branch op in de lijst en klik op de knop *New pull request*.  
In het volgende vester kies je als *base* de branch *master* en als de compare branch jouw eigen branch. Meestal staat dit al zo ingesteld. Voer eventueel een bericht in en klik op *Create pull request*.  
Je hebt nu een pull request gemaakt. Een pull request kan alleen door [Koen](https://github.com/KoenNL) worden geaccepteerd.  

### Lokale bestanden updaten
Wanneer anderen aanpassingen hebben gemaakt in het project, moet je deze op jouw eigen PC inladen. Dit doe je door een *pull* te doen op jouw PC.  
**LET OP!** Het is verstandig om alleen maar een *pull* te doen wanneer je geen wijzigingen op je lokale computer hebt staan die nog niet in een commit zitten. Anders kan het zijn dat NetBeans gaat vragen of je wijzigingen terug wilt draaien.  
Klik met de rechter muisknop op het project en kies voor `Git->Remote->Pull...`. Klik op *Next* en kies hier de *master* branch. Klik weer op *Next* en vervolgens op *Finish*. De wijzigingen van *master* worden nu samengevoegd met de wijzigingen in jouw lokale kopie van jouw branch.  
Het kan zijn dat Netbeans een melding geeft dat er een *Merge* of een *Rebase* moet worden uitgevoerd. Wanneer je op je lokale PC geen wijzigingen hebt die nog niet in een commit zitten mag je hier op *Merge* klikken.  