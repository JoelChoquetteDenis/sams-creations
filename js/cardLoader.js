const j = new URLSearchParams(document.location.search).get('j');
const i = Number(j ? j.match(/\d/) : 0) || 0;
const d = i + 1;

const objNom = document.querySelector('.nom');
// const objCap = document.querySelector('.cap');
const objIng = document.querySelector('.ing');
const arrP = document.querySelectorAll('.p');
const objS = document.querySelector('.s');
const objSl = document.querySelector('.sl');

document.querySelector('.img').src = `images/microscope/${i}.png`;
document.querySelectorAll('span.d').forEach(elem => {elem.textContent = d});

switch (i) {
    case 0:
        objNom.textContent = 'GANACHE CHOCOLAT';
        // objCap.textContent = 'Fleurage de chocolat';
        objIng.textContent = 'Chocolat au lait 51% cacao, beurre, crème, beurre de cacao';
        arrP[0].textContent = 'Cette merveilleuse expérience sensorielle débute par un fin chocolat garni d’une soigneuse ganache de chocolat. Pour ce faire, tout débute par la récolte de la fève de cacao poussant dans les cacaoyers. Ils seront ensuite fermentés dans de grandes cuves et seront torréfiés dans de grands torréfacteurs industriels. La fève poursuivra son chemin dans les industries où ils seront raffinés en fine pâte. Ils seront ensuite mélangés avec divers ingrédients essentiels à son développement, et le tout ? Un fin agréable chocolat sucré et mi-amer en bouche. Celui-ci sera donc fondu dans une cuve, mélangé avec un beurre de qualité et de la crème provenant de nos merveilleuses vaches du Québec.';
        arrP[1].textContent = 'Ce chocolat est redoutablement le fruit de la création qui offre une douceur naturelle et vous pouvez goûter le profil complet du territoire provenant de la fève de cacao.';
        arrP[2].textContent = 'Le cacao fut utilisé comme monnaie d’échange auparavant. Dans les anciennes cultures mésoaméricaines, le cacao n’était pas seulement un aliment, c’était aussi une monnaie d’échange. Les Mayas et les Aztèques utilisaient les fèves de cacao pour le commerce, le paiement des impôts et même les offrandes aux dieux lors de cérémonies sacrées. Il valait littéralement plus que l’or.';
        objS.textContent = 'Chocolate bloom. Macrographie, issue de © science photo library limited.';
        objSl.href = objSl.textContent = 'https://www.sciencephoto.com/media/112867/view/chocolate-bloom-sem';
        break;
    case 1:
        // objNom.textContent = 'PRALINÉ D’AMANDES';
        objNom.textContent = 'PRALINE D’AMANDES';
        // objCap.textContent = 'Cellule d’amande';
        objIng.textContent = 'Chocolat au lait 51% cacao, amandes, sucre de canne, beurre de cacao';
        arrP[0].textContent = 'Les amandiers sont les arbres qui produisent les fèves d’amandes. Ils entrent en floraison au printemps, vers novembre. Lors du développement, la coque sèchera et s’ouvrira pour laisser place à l’amande. Après la récolte, le fruit subira un traitement pour enlever sa peau, puis il sera séché, ce qui donnera une douce noix amère. Lors du processus de fabrication, ces amandes seront torréfiées jusqu’à l’obtention de la texture la plus désirable et elle sera mélangée dans une cuve de sucre bouillant. Le tout sera poursuivi d’un moulage d’une longue durée jusqu’à ce que les huiles de l’amande se dispersent et laisse place à un doux praliné.';
        arrP[1].textContent = 'Ce chocolat évoquera le goût de la douce torréfaction qui vous rappellera le goût de la noisette grillé en laissant des notes subtiles de crème. Puis sa saveur plus profonde et savoureuse vous rappellera ces moments dont vous n’attendiez que de grimper le sommet de la montagne avant de pouvoir savourer vos fameuses noix énergiques.';
        arrP[2].textContent = 'Le savez-vous ? Les noix d’amandes sont considérées comme étant dans la même famille que ceux des prunes. En y réfléchissant de plus près, lorsque l’on analyse la texture d’un noyau de prune, celui-ci ressemble étrangement à la même composition qu’une amande. L’amande est alors une prune, mais beaucoup plus petite, donc le processus de transformation est totalement différent.';
        objS.textContent = 'Almond nut. Macrographie, issue de © science photo library limited.';
        objSl.href = objSl.textContent = 'https://www.sciencephoto.com/media/218834/view/almond-nut-sem';
        break;
    case 2:
        // objNom.textContent = 'CRÈME BABEURRE VANILLE';
        objNom.textContent = 'CREME BABEURRE VANILLE';
        // objCap.textContent = 'Fèves de vanille';
        objIng.textContent = 'Chocolat au lait 51% cacao, beurre, sucre en poudre, crème, extrait de vanille, beurre de cacao';
        arrP[0].textContent = 'La vanille est probablement l’une des fleurs les plus goûteuses dans le monde. Tout commence par la pollinisation qui est faite manuellement, puisqu’aucun insecte pollinisateur est suffisamment efficace dans les régions de cultures. Les gousses mettront environ 9 mois avant d’atteindre leur maturité et ils seront récoltés, lavés, puis séchés au soleil. La vanille sera par la suite fermentée en les laissant soigneusement séchés au soleil pendant plusieurs mois et sera placée à l’ombre afin de développer davantage de saveurs. Dans ce chocolat, cette vanille a soigneusement été mélangée avec une mixture de beurre de qualité et de sucre a glacé jusqu’à l’obtention d’une fine pâte vanillée.';
        arrP[1].textContent = 'Dans cette merveilleuse création, vous retrouverez le doux parfum exquis de la vanille et des notes crémeuses d’un léger beurre sucré. Puis le tout vous rappellera les doux desserts vanillés qui vous réconfortaient après une dure journée de travail.';
        arrP[2].textContent = 'Le savez-vous ? L’orchidée de vanille ne vit pas plus de 24 h. La vanille est considérée comme une orchidée et il est parmi les seuls qui font pousser des fruits. La fleur entre en floraison durant une période totale de 24 h et elle doit être pollinisée durant le temps imparti, sans quoi elle mourra.';
        objS.textContent = 'Vanilla pod seeds. Macrographie, issue de © science photo library limited.';
        objSl.href = objSl.textContent = 'https://www.sciencephoto.com/media/830200/view';
        break;
    case 3:
        objNom.textContent = 'CERISE CHERRY BLOSSOM';
        // objCap.textContent = 'Feuille de cerise';
        objIng.textContent = 'Chocolat au lait 51% cacao, sucre en poudre, sirop au marasquin, cerise au marasquin, noix de coco, beurre de cacao';
        arrP[0].textContent = 'La cerise fait partie de l’un des fruits à noyau les plus populaires sur terre. Lorsque le cerisier entre en floraison au printemps, les insectes viendront polliniser le cerisier et les fleurs laisseront place à de merveilleuses cerises. Lorsque ceux-ci auront fini de mûrir vers l’été, ils seront récoltés, puis l’eau composant la cerise sera remplacée par du sucre via un processus d’osmose. Ils seront par la suite transférés dans une cuve remplie de sirop de cerise Marasca Luxardo,puis ils seront fermentés jusqu’à l’obtention des fameuses cerises marasquin que l’on connait tous. Lors de la confection de ces délicieux chocolats, des extraits de noix de coco seront déposés dans les moules lorsque le chocolat est encore liquide, ensuite une crème de marasquin sera versée dans le creux du chocolat, et la cerise sur le gâteau, une cerise au marasquin sera déposée dans le liquide.';
        arrP[1].textContent = 'Dans cette création originale, le merveilleux parfum de la cerise vous viendra tout de suite en bouche, suivi des agréables notes de noix de coco. Puis le mélange avec le chocolat de qualité vous évoquera de la nostalgie, notamment en vous rappelant le délicieux goût du Cherry Blossom.';
        arrP[2].textContent = 'Le savez-vous ? Lors de sa création, les cerises au marasquin étaient conservées dans de la liqueur alcoolisée au marasquin et ils étaient considérés comme l’un des desserts les plus prestigieux à l’époque dus à son coût excessivement dispendieux.';
        objS.textContent = 'Cherry leaf stalk. Macrographie, issue de © science photo library limited.';
        objSl.href = objSl.textContent = 'https://www.sciencephoto.com/media/680043/view';
        break;
    case 4:
        objNom.textContent = 'GANACHE CITRON';
        // objCap.textContent = 'Cellule de zeste de citron';
        objIng.textContent = 'Chocolat au lait 51% cacao, beurre, crème, extrait de jus de citron, beurre de cacao';
        arrP[0].textContent = 'Les citrons sont probablement l’un des fruits les plus acidulés sur terre. Ils poussent dans un citronnier qui entre en floraison toute l’année, mais surtout lors du printemps et de l’été. Ils produisent alors des petites fleurs blanches qui seront par la suite pollinisées jusqu’à l’apparition de petits fruits verts. Les citrons continueront donc à maturer durant 4 à 9 mois jusqu’à l’obtention de sa couleur jaune éclatant et ils seront par la suite cueillis. Dans cette originale confiserie acidulée, le citron sera fraichement pressé dans l’obtention d’un jus pur et frais et sa pelure sera râpée dans l’obtention d’un riche zeste de citron. Il sera ensuite mélangé avec du chocolat blanc, du beurre et de la crème fraiche jusqu’à l’obtention d’une merveilleuse texture de ganache au citron dont tout le monde raffole.';
        arrP[1].textContent = 'Ce bonbon acidulé est extrêmement riche et fondant en bouche. Il possède un goût intense en chocolat blanc et un délicieux parfum acidulé du citron qui vous rappellera les fameuses tartes au citron faites avec amour.';
        arrP[2].textContent = 'Le savez-vous ? À l’époque, les citrons étaient reconnus pour sa rareté et sa prestigieuse apparence qui faisait rappeler la couleur l’or. Ceux-ci étaient souvent utilisés comme offrande aux rois pour offrir leur gratitude envers eux.';
        objS.textContent = 'Lemon peel cell zest. Macrographie, issue de © science photo library limited.';
        objSl.href = objSl.textContent = 'https://www.sciencephoto.com/media/801525/view';
        break;
    case 5:
        objNom.textContent = 'BEURRE D’ARACHIDE';
        // objCap.textContent = 'Cristaux de sucre';
        objIng.textContent = 'Chocolat au lait 51% cacao, beurre d’arachide, beurre de cacao';
        arrP[0].textContent = 'Les délicieuses arachides sont le fruit de nombreuses créations originales reconnues partout dans le monde. Pour ce faire, l’arachide doit se développer à travers une série d’étapes unique. D’abord, lors de la saison de floraison, la plante produit des fleurs jaunes au-dessus du sol. Une fois fécondée, une pousse appelée gonophore sort de la fleur et s’étire vers le sol. Elle s’enfonce à 3 à 7 cm de profondeur, et c’est là que la coquille se forme et grossit sous terre. Le légume se développera donc sous terre, la coquille durcira et les graines à l’intérieur se rempliront de nutriments qui donneront le goût unique de l’arachide. Lors de sa récolte, la coquille sera donc fendue pour permettre l’extraction de la noix. Celle-ci sera donc torréfiée puis écrasée sous une fine poudre jusqu’à l’obtention d’un praliné. Il sera mélangé avec de nombreux ingrédients, tels le sucre et des huiles végétales jusqu’à l’obtention de la tartinade la plus envoutée au monde, le beurre d’arachide.';
        arrP[1].textContent = 'Cette agréable création vous fait ressentir les merveilleuses saveurs de l’arachide sous une texture crémeuse et soyeuse tout en ayant de jolies notes de noix rôties. Le mélange avec un chocolat de qualité vous rappellera sans doute le goût exceptionnel des Reese’s dont vous raffolez tant comme enfant.';
        arrP[2].textContent = 'Le savez-vous ? Les arachides sont considérées comme des légumes. Au contraire de certaines croyances, les arachides ne sont pas des noix, les arachides poussent donc sous terre et sont dans la même famille que les lentilles… qui sont des légumes.';
        objS.textContent = 'Polarised LM of crystals of sugar. Macrographie, issue de © science photo library limited.';
        objSl.href = objSl.textContent = 'https://www.sciencephoto.com/media/680043/view';
        break;
    case 6:
        // objNom.textContent = 'PRALINÉ COCONUT';
        objNom.textContent = 'PRALINE COCONUT';
        // objCap.textContent = 'Cellule de fibre de noix de coco';
        objIng.textContent = 'Chocolat au lait 51% cacao, noix de coco, sucre de canne, beurre de cacao';
        arrP[0].textContent = 'La noix de coco est probablement le fruit le plus étonnant et prononcé dans les différents desserts l’entourant. Le développement de la noix de coco commence par l’apparition de petites noix de la taille d’une bille dans les cocotiers. Ceux-ci continueront leurs développements en se servant des nutriments reçus par l’arbre et ils sont indépendants de tout insecte pollinisateur. La noix de coco poursuivra sa croissance durant une période de 11 mois et elle tombera par elle-même lorsqu’elle sera mûre. La noix de coco sera ensuite épluchée pour arriver au centre du fruit et sera cassée pour accéder à sa riche chair blanche. La chaire sera ensuite séchée au soleil et elle sera torréfiée. Dans l’obtention de ce chocolat, la chaire sera ensuite concassée et écrasée jusqu’à l’obtention d’un riche praliné fibreux.';
        arrP[1].textContent = 'Ce riche chocolat vous évoquera l’excellent goût de la noix de coco grillé et de douces notes d’amandes. Le tout vous rappellera certainement les fameux gâteaux à la noix de coco lors des périodes de fête.';
        arrP[2].textContent = 'Le savez-vous ? La noix de coco fut utilisée comme grenade durant la Seconde Guerre mondiale. Les Japonais étaient reconnus pour insérer des grenades à l’intérieur des noix de coco et les lancer sur l’ennemi dans le but qu’il ne se doute pas que celle-ci est piégé.';
        objS.textContent = 'Section through coconut shell. Macrographie, issue de © science photo library limited.';
        objSl.href = objSl.textContent = 'https://www.sciencephoto.com/media/1033597/view';
        break;
    case 7:
        // objNom.textContent = 'GANACHE CARAMEL ÉCOSSAISE CAFÉ';
        objNom.textContent = 'GANACHE CARAMEL ECOSSAISE CAFE';
        // objCap.textContent = 'Cristaux de caféine';
        objIng.textContent = 'Chocolat au lait 51% cacao, caramel écossais, beurre, crème, extrait de café, beurre de cacao';
        arrP[0].textContent = 'Le café est la source énergisante la plus envoutée partout dans le monde. Pour ce faire, les caféiers qui poussent dans les régions tropicales nécessitent une grande altitude pour produire des cerises de café optimales. Après la floraison, les fleurs blanches se transforment en cerise contenant 2 grains. Les cerises deviennent matures en 9 mois, passant du vert au rouge. Lorsque les cerises seront prêtes, ils seront récoltés et l’on séparera les grains de la pulpe. Les grains seront ensuite séchés au soleil durant un mois avant d’être torréfiés. Dans ce chocolat, les grains de café ont été extraits en espresso et mélangés avec un réconfortant caramel écossais, du beurre de qualité et de la crème onctueuse.';
        arrP[1].textContent = 'Ce fabuleux chocolat, pétillant de saveurs, vous fera déguster le merveilleux goût du café de qualité qui vous rappellera la créativité prestigieuse d’un barista. Vous y trouverez aussi le goût rehaussant du caramel écossais mélangé au beurre qui rajoute une touche douce et réconfortante au chocolat.';
        arrP[2].textContent = 'Le savez-vous ? Le café le plus dispendieux au monde est celui du Kopi Luwak. Il s’agit d’une petite bête similaire à un opossum et un raton laveur qui mange les cerises de café et qui digère naturellement ces cerises pour laisser place aux grains de café. Les Kopi Luwak poursuivront donc en déféquant ces grains et ils seront ensuite récoltés et séchés au soleil pour créer le café le plus dispendieux sur terre, soit environ 600 $/lb ou 27 $ la tasse de café.';
        objS.textContent = 'Polarised LM of crystals of caffeine. Macrographie, issue de © science photo library limited.';
        objSl.href = objSl.textContent = 'https://www.sciencephoto.com/media/680043/view';
        break;
    case 8:
        // objNom.textContent = 'PRALINÉ NOISETTE';
        objNom.textContent = 'PRALINE NOISETTE';
        // objCap.textContent = 'Cristaux de fleur de menthe';
        objIng.textContent = 'Chocolat au lait 51% cacao, noisettes, sucre de canne, beurre de cacao';
        arrP[0].textContent = 'Les noisettes sont probablement les noix les plus souvent utilisées dans les desserts les plus prestigieux qui existent et sont souvent considérées comme l’ingrédient le plus savoureux et désirable au monde. Pour ce faire, l’arbre produisant les noisettes s’appelle noisetiers. Les bourgeons de cet arbre se forment à l’automne, puis s’ouvrent en fleur à l’automne. Le noisetier possède des fleurs mâles et femelles, puis les femelles sont fécondées grâce au pollen transporté par le vent. Se suit donc la transformation des fleurs en coques et le développement commence. Le fruit continue donc de mûrir en passant de la couleur verte à brune et elles seront prêtes lorsqu’ils tomberont au sol. Les noisettes seront par la suite torréfiées jusqu’à ce que la pelure puisse se décrocher par elle-même. Ils suivront donc le processus de moulure jusqu’à l’obtention d’un doux praliné.';
        arrP[1].textContent = 'À travers cette prestigieuse création, vous y retrouverez un parfum intense de noisettes grillées avec une merveilleuse texture onctueuse qui vous rappellera certainement un goût similaire au Nutella.';
        arrP[2].textContent = 'Le savez-vous ? Les Grecques utilisaient les noisettes comme façon de soigner le rhume et la grippe. Bien que les noisettes ne puissent pas réellement soigner le rhume et la grippe, les croyances grecques pensaient que les noisettes possédaient des propriétés le permettant. C’est une façon délicieuse de régler un problème !';
        objS.textContent = 'Water mint flower cell. Macrographie, issue de © science photo library limited.';
        objSl.href = objSl.textContent = 'https://www.sciencephoto.com/media/32415/view/water-mint-flower-cells-sem';
        break;
    case 9:
        // objNom.textContent = 'PRALINÉ PISTACHE-PÉCAN';
        objNom.textContent = 'PRALINE PISTACHE-PECAN';
        // objCap.textContent = 'Tricônes d’arbre de cacao';
        objIng.textContent = 'Chocolat au lait 51% cacao, pistaches, pécans, sucre de canne, beurre de cacao';
        arrP[0].textContent = 'Les pistaches sont probablement l’une des noix les plus dispendieuses au monde et elle est reconnue pour son goût unique. Les pistaches poussent alors dans les pistachiers et similaires aux autres noix, ils entrent en floraison et lors de la pollinisation, ils se transforment en petite coque. En mûrissant, les coques continueront de grandir et ils laisseront place à une mince fissure permettant à la pistache de s’ouvrir. Les pistaches seront donc séchées et torréfiées, de même que les noix de pécan, et ils seront par la suite moulus jusqu’à l’obtention d’une fine pâte onctueuse et fibreuse la plus envoutée.';
        arrP[1].textContent = 'Cette création, unique et délicieuse, marquera donc la fin de cette amusante expérience sensorielle prestigieuse. Dans ce chocolat, vous retrouverez un profil intense d’un doux goût praliné aux pistaches avec des notes de noix de coco et d’amande et un fort goût terreux des noix de pécan. Le tout vous rappellera le goût du fameux chocolat Dubaï dont tout le monde raffole.';
        arrP[2].textContent = 'Le savez-vous ? Les noix de pécan ont été découvertes il y a plus de 9000 ans. C’est-à-dire que l’on n’avait toujours pas découvert l’agriculture avant de consommer des pistaches.';
        objS.textContent = 'Cocoa tree trichomes. Macrographie, issue de © science photo library limited.';
        objSl.href = objSl.textContent = 'https://www.sciencephoto.com/media/625143/view';
        break;
}