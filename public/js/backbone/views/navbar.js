var Navbar = Backbone.View.extend({
  el: "#nav",
  homeTemplate: _.template($("#home-template").html()),
  foodTemplate: _.template($("#food-template").html()),
  navTemplate: _.template($("#nav-template").html()),
  beveragesTemplate: _.template($("#beverages-template").html()),
  attractionsTemplate: _.template($("#attractions-template").html()),
  initialize: function() {
    this.render();
  },
  events: {
    'click #food-tab'        : 'food',
    'click #beverages-tab'   : 'beverages',
    'click #attractions-tab' : 'attractions',
    'click #query-tab'       : 'query',
    'click .btn-logout'      : 'logout'
  },
  render: function() {
    this.$el.html(this.navTemplate());
    return this;
  },
  home: function() {
    $('.home').html(this.homeTemplate());
    var form = new Form();
    router.navigate('', {trigger: true});
    return this;
  },
  food: function() {
    $('.food').html(this.foodTemplate());
    router.navigate('food', {trigger: true});
    return this;
  },
  beverages: function() {
    $('.beverages').html(this.beveragesTemplate());
    router.navigate('beverages', {trigger: true});
    return this;
  },
  attractions: function() {
    $('.attractions').html(this.attractionsTemplate());
    router.navigate('attractions', {trigger: true});
    return this;
  },
  query: function() {
    var view = new Query();
    $('.query').html(view.el);
    view.render();
    router.navigate('query', {trigger: true});
  },
  logout: function() {
    var ref = new Firebase("https://where-to.firebaseio.com/users");
    ref.unauth();
    this.home();
    $('.navbar-right').hide();
  }
});