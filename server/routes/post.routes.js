const Router = require("express");
const Campaign =  require("../models/Campaign");

const router = new Router()

router.get('/allPost', async (req, res) => {	
	try {
		const [rows] = await db_connection.execute("SELECT * FROM posts ");
		return res.json({ success: true, listall:rows, });	
	} catch (err) {console.log(err)}
});

router.post('/addArticle', async (req, res) => {	
	try {
		const [rows] = await db_connection.execute("INSERT INTO `posts` (`title`,`description`,`information`) VALUES(?, ?, ?)",[req.body.title,req.body.description,req.body.information]);
			if (rows.affectedRows === 1) {
				return res.json({ success: true}) 
			}	
	} catch (err) {console.log(err)}
});

router.post('/getPostId', async (req, res) => {	
	try {
		const [rows] = await db_connection.execute("SELECT * FROM  posts where id = ? ",[req.body.ids]);
		if(rows.length > 0 ){
			return res.json({ success: true, listId:rows,}) 
		}	
	} catch (err) {console.log(err)}
});

router.post('/editArticle', async (req, res) => {	
	try {
		const [update] = await db_connection.execute("UPDATE `posts` SET `title`=?, `description`=?,`information`=? WHERE id = ?",[req.body.title,req.body.description,req.body.information,req.body.ids]);
		if (update.affectedRows === 1) {
					return res.json({ success: true, }) 
			}	
	} catch (err) {console.log(err)}
});

module.exports = router