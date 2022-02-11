module.exports = function pageIndex(request, page){
  return {
    data : {
      metaData : {
        description : "un super test",
        image : "",
        siteName : "test site",
        siteUrl : "localhost:4000",
        slug : request.uri,
        title : "Mouvement Rozen"
      },
      titleH1 : "Le mouvement Rozen :)"
    },
    template : "pages/index/indexTemplate.html",
    typeMime : "html"
  };
};