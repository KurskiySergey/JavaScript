'use strict';

//es5

function Post ( author , text , date ) {

	this.author = author;
	this.text = text;
	this.date = date;
}

Post.prototype.edit = function ( text ) {
	this.text = text;
}

Post.prototype.show = function () {
	alert(`author = ${this.author}`);
	alert(`text = ${this.text}'`);
}

function AttachedPost ( author , text , date) {
	Post.call(this, author, text, date);
	this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
	this.highlighted = true;
	alert("highlighted");
}

//es6

class PostEs6 {

	constructor ( author , text , date) {
		this.author = author;
		this.text = text;
		this.date = date;
	};

	edit ( text ) {
		this.text = text;
	}

	show () {
		alert(`author = ${this.author}`);
		alert(`text = ${this.text}'`);
	}
}

class AttachedPostEs6 extends PostEs6 {
	constructor ( author , text , date) {
		super ( author , text , date);
		this.highlighted = false;
	}

	makeTextHighlighted () {
		this.highlighted = true;
		alert("highlighted");
	}
}


function task3() {

	let post1 = new Post ( "Tolkien", "Lord", "1937");
	post1.show();
	post1.edit("LordOfRings");
	post1.show();

	let attachedPost1 = new AttachedPost ( "Tolkien", "Lord", "1937" );
	attachedPost1.show();
	attachedPost1.makeTextHighlighted();

	let post2 = new PostEs6 ( "Rowling" , "Harry" , "1997");
	post2.show()
	post2.edit("Harry Potter");
	post2.show();

	let attachedPost2 = new AttachedPostEs6 ( "Rowling" , "Harry" , "1997");
	attachedPost2.show();
	attachedPost2.makeTextHighlighted();

}