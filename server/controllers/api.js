
import superagent from 'superagent'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import { APIError } from '../rest'

module.exports = {
    'GET /api/douban/:page': async (ctx, next) => {
        await doubanCrawler(ctx)
    },

    'GET /api/jandan/:page': async (ctx, next) => {
        await jandanApi(ctx)
    }
}

const doubanCrawler = async (ctx) => {
    const page = ctx.params.page-1 || 0
    const start = page * 25
	const targetUrl = 'https://www.douban.com/group/haixiuzu/discussion?start=' + start
	let res = await superagent.get(targetUrl)
	let	$ = cheerio.load(res.text)
	let aTags = $('.olt').find('.title>a')
	// console.log(aTags.attribs.href,aTags.attribs.title)
	let topicUrls = []
	aTags.each((index, element) => {
    		// console.log(element.attribs.href,element.attribs.title)
		topicUrls.push(element.attribs.href)
	})

	// console.log(topicUrls.length)

	let imgUrls = []
	for (let topicUrl of topicUrls) {
		let res = await superagent.get(topicUrl)
		let	$ = cheerio.load(res.text)
		let imgTags = $('.topic-figure').children('img')
		// console.log(imgTags.length)
		imgTags.each((index, element) => {
			element.attribs.src && imgUrls.push(element.attribs.src)
		})
	}
    console.log(imgUrls.length)
    ctx.rest({
        success: true,
        imgUrls: imgUrls
    })
}

const jandanApi = async (ctx) => {
    const page = ctx.params.page || 1
    let res = await fetch('http://i.jandan.net/?oxwlxojflwblxbsapi=jandan.get_ooxx_comments&page=' + page)
    let json = await res.json()
    let imgUrls = []
    for (let url of json.comments) {
        imgUrls = imgUrls.concat(url.pics)
    }
    ctx.rest({
        success: true,
        imgUrls: imgUrls
    })
}