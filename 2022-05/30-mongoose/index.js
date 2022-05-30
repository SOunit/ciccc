const mongoose = require("mongoose");
const Blog = require("./models/Blog");
const User = require("./models/User")

mongoose.connect(
  "mongodb+srv://andasan:kuishinbo@cluster0.cwwxk.mongodb.net/?retryWrites=true&w=majority"
);

//Insert data
const blogCreate = async () => {

    const user = await User.create({
        name: "hoge",
        email: "hoge@hoge.com"
    })

  //method 1
  // const article = new Blog({
  //     title: 'New Post',
  //     slug: 'new-post',
  //     published: true,
  //     content: 'This is a new post',
  //     tags: ['new', 'featured']
  // })

  //method 2
  const article = await Blog.create({
    title: "New Post",
    slug: "new-post",
    published: true,
    content: "This is a new post",
    tags: ["new", "featured"],
    author: user._id
  });

  await article.save();
};

const blogFind = async () => {
  const firstArticle = await Blog.find({});
  console.log(firstArticle);
};

const blogFindOne = async () => {
  const firstArticle = await Blog.findOne({});
  console.log(firstArticle);
};

const blogFindOnewithUser = async () => {
    const firstArticle = await Blog.findOne({ slug: "new-post"}).populate("author");
    console.log(firstArticle);
  };

const blogUpdate = async () => {
  const articleToUpdate = await Blog.findOne({});
  articleToUpdate.title = "An Awesome Post";
  await articleToUpdate.save();
  console.log(articleToUpdate);
};

const blogFindById = async () => {
  const articleById = await Blog.findById(
    "6294ed8b42d4e7d37e121704",
    "title slug content"
  ).exec();
  console.log(articleById);
};

const blogDelete = async () => {
    const blog = await Blog.deleteOne({ slug: "new-post"})
    console.log(blog);
};

const blogDeleteMany = async () => {
    const blog = await Blog.deleteMany({ slug: "new-post" })
    console.log(blog);
};

const blogUsefulMethods = async () => {
    const blogExists = await Blog.exists({ slug: "new-post" })
    console.log(blogExists);

    const blogFind = await Blog.findOne({ slug: "new-post"})
    console.log(blogFind)

    const blogWhere = await Blog.where("slug").equals("new-post")
    console.log(blogWhere)

    const blogWhere2 = await Blog.where("slug").equals("new-post").select("title content")
    console.log(blogWhere2)
};



// blogCreate();
// blogFind();
// blogFindOne();
// blogFindOnewithUser();
blogUpdate();
// blogFindById();
// blogDelete();
// blogDeleteMany();
// blogUsefulMethods();