﻿var citati = new Array("Скажите мне, что со смертью все не заканчивается. Что все не кончается Февралем.",
"Не зря родители в детстве предупреждали, что не стоит играть со спичками и слишком долго смотреть на Тома Йорка. ",
"Я думаю все будет хорошо, смысл жизни – не самая плохая штука. ",
"Куда бы ты ни отправился -- ты всюду будешь обязан выполнять работу, которую считаешь неправильной. ",
"Основное условие существования жизни -- тебя всегда будут принуждать насиловать собственную совесть. ",
"Я слишком хорошо знаю свои недостатки, чтобы требовать взаимной любви.",
"Когда я попросил Алису выйти за меня замуж, она дала ответ, полный нежности, романтики, проницательности, красоты и теплоты.– Нет.",
"Спать я буду, когда завершу образование. А пока пью черный кофе.",
"Страдания ведут человека к совершенству.",
"Нереальное сильнее реальности. Потому что в реальном мире совершенства не существует. Совершенно лишь то, что мы придумываем для себя.",
"Одиночество обусловлено не отсутствием людей вокруг, а невозможностью говорить с людьми о том, что кажется тебе существенным, или неприемлемостью твоих воззрений для других.",
"То, что мы испытываем, когда бываем,  влюблены, быть может, и есть наше нормальное состояние.",
"Влюбленность указывает человеку, каким он должен быть.",
"Только она одна из всех, кого я помню, смотрела мне прямо в глаза — так, словно я что-то значу.",
"-Все это видели?! Ибо я отказываюсь это повторять! ",
"Порой мы можем пройти мимо нашей судьбы,  даже не обратив на нее ни малейшего внимания, просто по тому, что  рассеяно смотрели куда-то вдаль, не замечая ничего вокруг.",
"Я ждал тебя,в сезон дождей.А море билосьпятками о скалы.Ты так давно меня искала,Что оказалось -я ничей.",
"Не жертвуйте собой.Вас не просили.",
"Отныне каждую среду макаронный вторник..",
"Я разбит. Я не окреп. Пустой сосуд, еще целый,но уже погребенный под осколками, или осколок, но все еще под гнетом целого..",
"Бесплатный совет: делая что-то, думай, каким эхом это отзовется для другого тебя. Того, которым ты будешь. Вот главный смысл...",
"Я лежал на полу в комнате, в одиночестве и в пальто,созерцая вечность в трещинках на потолке...",
"Пол жизни прожил, а тебе нечего рассказать.",
"Мои легкие наполнены горечью, они безумно болят, а горло не дает дорогу моему привычному голосу, уступая гнусаво-хриплому...")
function cit(){
var r = Math.floor(Math.random() * (citati.length - 0)) + 0
document.getElementById("main").innerHTML = citati[r];
}
