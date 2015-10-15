$(function() {

  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
  Parse.initialize("gAmTsYkYYPa3jfZ7D1khIfqu8lWqadd2G9yPmTqJ", "kBZ2Ds12lJkBvlmXBrrcyD2Rn1Tsm1KHHNJS9wOg");

  // Todo Model
  // ----------

  // Our basic Todo model has `content`, `order`, and `done` attributes.
  var Blog = Parse.Object.extend("Blog");

  // Todo Collection
  // ---------------

  var Blogs = Parse.Collection.extend({

    model: Blog

  });

  var blogs = new Blogs();

  blogs.fetch({
	    success: function(blogs) {
	        var blogsView = new BlogsView({ collection: blogs });
	        blogsView.render();
	        $('.main-container').html(blogsView.el);
	    },
	    error: function(blogs, error) {
	        console.log(error);
	    }
	});

  	var BlogsView = Parse.View.extend({
  		template: Handlebars.compile($('#blogs-tpl').html()),
  		render: function(){
  			var collection = { blog: this.collection.toJSON() };
  			this.$el.html(this.template(collection));
  		}
  	});

});
