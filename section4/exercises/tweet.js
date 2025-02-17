/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author
    this.content = content
    this.timeStamp = timeStamp
    this.numberOfLikes = numberOfLikes
    this.comments = comments
  }
  addComment(comment) {
    this.comments.push(comment)
  }
  like() {
    this.numberOfLikes += 1
  }
}

var newTweet = new Tweet("Jay", "Like and Subscribe", "12:00pm", 20, [
  "nice tweet",
  "piss off",
])

console.log(newTweet)

newTweet.addComment("I like you")

console.log(newTweet)

newTweet.like()

console.log(newTweet)
