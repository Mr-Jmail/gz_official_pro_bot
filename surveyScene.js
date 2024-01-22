const { Scenes } = require("telegraf")

module.exports = new Scenes.WizardScene("surveyScene", 
    async ctx => {
        ctx.scene.session.state = { firstName: "", lastName: "", phoneNumber: "" }
        await ctx.replyWithPhoto("AgACAgIAAxkBAAMLZa4knPqYHc6EO3IcU200TWU6ssoAAnbYMRtyp3FJrIARuwYvO9UBAAMCAAN4AAM0BA").catch(err => console.log(err))
        await ctx.reply("Добрый день!\nВас приветствует ПАО \"Газпром Инвест\". В нашей дружной команде уже более 5000 партнёров со всего мира и мы надеемся что в этом весеннем наборе новых инвесторов Вы также присоединитесь к нашей команде и будете зарабатывать вместе с нами.\n\nОсталось мест 19 из 200 (дальше вход будет закрыт ровно на год)", {reply_markup: {inline_keyboard: [[{text: "Оставить заявку", callback_data: "Оставить заявку"}]]}}).catch(err => console.log(err))
        return ctx.wizard.next()
    },
    async ctx => {
        if(ctx?.callbackQuery?.data != "Оставить заявку") return
        await removeKyeboardFromMessage(ctx).catch(err => console.log(err))
        await ctx.reply("Шаг 1 из 6").catch(err => console.log(err))
        await ctx.replyWithPhoto("AgACAgIAAxkBAAMOZa4l41wbg_RZUkfFAAFHvyoccDEzAAJ82DEbcqdxSboEl1k4tE1DAQADAgADeAADNAQ").catch(err => console.log(err))
        await ctx.reply("Какой ваш возраст?", {reply_markup: {inline_keyboard: [[{text: "18-25", callback_data: "18-25"}], [{text: "25-35", callback_data: "25-35"}], [{text: "35-45", callback_data: "35-45"}], [{text: "45+", callback_data: "45+"}]]}}).catch(err => console.log(err))
        return ctx.wizard.next()
    },
    async ctx => {
        if(!["18-25", "25-35", "35-45", "45+"].includes(ctx?.callbackQuery?.data)) return
        await removeKyeboardFromMessage(ctx).catch(err => console.log(err))
        await ctx.reply("Шаг 2 из 6").catch(err => console.log(err))
        await ctx.replyWithPhoto("AgACAgIAAxkBAAMQZa4msxshPDFU32qC8FzJoo6RlV8AAn_YMRtyp3FJPaGQUo0feqgBAAMCAAN4AAM0BA").catch(err => console.log(err))
        await ctx.reply("Ваша финансовая цель?", {reply_markup: {inline_keyboard: [[{text: "Обеспечить себя и семью", callback_data: "Обеспечить себя и семью"}], [{text: "Создать финансовую подушку", callback_data: "Создать финансовую подушку"}], [{text: "Купить личное жилье", callback_data: "Купить личное жилье"}], [{text: "Быть материально независимым", callback_data: "Быть материально независимым"}]]}}).catch(err => console.log(err))
        return ctx.wizard.next()
    },
    async ctx => {
        if(!["Обеспечить себя и семью", "Создать финансовую подушку", "Купить личное жилье", "Быть материально независимым"].includes(ctx?.callbackQuery?.data)) return
        await removeKyeboardFromMessage(ctx).catch(err => console.log(err))
        await ctx.reply("Шаг 3 из 6").catch(err => console.log(err))
        await ctx.replyWithPhoto("AgACAgIAAxkBAAMYZa4nc1MPbeHV6j4Ol09PIv_QmM4AAgLTMRuu3XBJc9smwTn4kPMBAAMCAAN4AAM0BA").catch(err => console.log(err))
        await ctx.reply("Куда вы планируете потратить первые заработанные деньги?", {reply_markup: {inline_keyboard: [[{text: "Погашу кредиты/долги", callback_data: "Погашу кредиты/долги"}], [{text: "Куплю то, о чем давно мечтал", callback_data: "Куплю то, о чем давно мечтал"}], [{text: "На путешествия", callback_data: "На путешествия"}], [{text: "Я вложу их снова", callback_data: "Я вложу их снова"}]]}}).catch(err => console.log(err))
        return ctx.wizard.next()
    },
    async ctx => {
        if(!["Погашу кредиты/долги", "Куплю то, о чем давно мечтал", "На путешествия", "Я вложу их снова"].includes(ctx?.callbackQuery?.data)) return
        await removeKyeboardFromMessage(ctx).catch(err => console.log(err))
        await ctx.reply("Шаг 4 из 6").catch(err => console.log(err))
        await ctx.replyWithPhoto("AgACAgIAAxkBAAMaZa4nymNuWbugaw6ChTD-MXAx1dwAAgTTMRuu3XBJJZt2qxVKJZwBAAMCAAN4AAM0BA").catch(err => console.log(err))
        await ctx.reply("Сколько времени в день, Вы готовы уделять заработку в своем смартфоне?", {reply_markup: {inline_keyboard: [[{text: "Несколько часов в день", callback_data: "Несколько часов в день"}], [{text: "Весь день", callback_data: "Весь день"}], [{text: "Один день в неделю", callback_data: "Один день в неделю"}], [{text: "Один день в месяц", callback_data: "Один день в месяц"}]]}}).catch(err => console.log(err))
        return ctx.wizard.next()
    },
    async ctx => {
        if(!["Несколько часов в день", "Весь день", "Один день в неделю", "Один день в месяц"].includes(ctx?.callbackQuery?.data)) return
        await removeKyeboardFromMessage(ctx).catch(err => console.log(err))
        await ctx.reply("Шаг 5 из 6").catch(err => console.log(err))
        await ctx.replyWithPhoto("AgACAgIAAxkBAAMcZa4oFWHMTctdR4xuU-hGjkbO1q8AAgbTMRuu3XBJ-SnRwh_gYWMBAAMCAAN4AAM0BA").catch(err => console.log(err))
        await ctx.reply("Согласны ли вы, что можно обеспечить свою семью благодаря торговле природными ресурсами?", {reply_markup: {inline_keyboard: [[{text: "Скорее да, чем нет", callback_data: "Скорее да, чем нет"}], [{text: "Скорее нет, чем да", callback_data: "Скорее нет, чем да"}], [{text: "Нет", callback_data: "Нет"}]]}}).catch(err => console.log(err))
        return ctx.wizard.next()
    },
    async ctx => {
        if(!["Скорее да, чем нет", "Скорее нет, чем да", "Нет"].includes(ctx?.callbackQuery?.data)) return
        await removeKyeboardFromMessage(ctx).catch(err => console.log(err))
        await ctx.reply("Шаг 6 из 6").catch(err => console.log(err))
        await ctx.replyWithPhoto("AgACAgIAAxkBAAMeZa4oh4njeA4TDVVoJjfo-jcjFZcAAhXTMRuu3XBJLLMJ6Nb5mrcBAAMCAAN4AAM0BA").catch(err => console.log(err))
        await ctx.reply("Готовы ли вы вкладывать свои силы, время, средства для того, чтобы получать от 5000 рублей ежедневно?", {reply_markup: {inline_keyboard: [[{text: "Да", callback_data: "Да"}], [{text: "Нет", callback_data: "Нет"}], [{text: "Хочу консультацию специалиста", callback_data: "Хочу консультацию специалиста"}]]}}).catch(err => console.log(err))
        return ctx.wizard.next()
    },
    async ctx => {
        if(!["Да", "Нет", "Хочу консультацию специалиста"].includes(ctx?.callbackQuery?.data)) return
        await removeKyeboardFromMessage(ctx).catch(err => console.log(err))
        await ctx.reply("Поздравляем! Вы получили доступ к проекту!🎁\n\nЧтобы начать зарабатывать, оставьте свои данные! Специалист проекта свяжется с вам в течении дня.\n\nВведите ваше имя").catch(err => console.log(err))
        return ctx.wizard.next()
    },
    async ctx => {
        if(!ctx?.message?.text) return
        ctx.scene.session.state.firstName = ctx.message.text
        await ctx.reply("Введите вашу фамилию").catch(err => console.log(err))
        return ctx.wizard.next()
    },
    async ctx => {
        if(!ctx?.message?.text) return
        ctx.scene.session.state.lastName = ctx.message.text
        await ctx.reply("Введите ваш номер телефона (пример 79054444444)").catch(err => console.log(err))
        return ctx.wizard.next()
    },
    async ctx => {
        if(!/^7\d{10}$/.test(ctx?.message?.text)) return ctx.reply("Введите корректный номер телефона (пример 79054444444)")
        ctx.scene.session.state.phoneNumber = ctx.message.text
        ctx.reply("Вы успешно зарегистрировались, наш эксперт свяжется с Вами в течении дня!").catch(err => console.log(err))
        const { firstName, lastName, phoneNumber } = ctx.scene.session.state
        saveToCRM(firstName, lastName, phoneNumber, generateRandomEmail())
        return ctx.scene.leave()
    }
)

async function removeKyeboardFromMessage(ctx) {
    return await ctx.editMessageReplyMarkup({inline_keyboard: [[]]}).catch(err => console.log(err))
}

async function saveToCRM(phoneNumber, firstName, lastName, email) {
    var res = await fetch(new URL(`https://doza-traffic.com/api/wm/push.json?id=${process.env.apiToken}&offer=1&flow=264&site=103&phone=${phoneNumber}&name=${firstName}&last=${lastName}&email=${email}`))
    console.log(await res.json());
}

function generateRandomEmail() {
    const randomName = faker.internet.userName();
    const randomDomain = faker.internet.domainName();
    const randomHash = crypto.randomBytes(8).toString('hex');
    return `${randomName}_${randomHash}@${randomDomain}`;
}