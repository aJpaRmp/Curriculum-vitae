$("h1").addClass("fullName");

$(".pinfo").css({
  "font-size": "10px",
  color: "gray",
  opacity: "30%",
  "text-align": "center",
});
$(".rodo").css({
  margin: "30px",
  "text-align": "center",
});

$(".rodo").html(`
    Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do 
    realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego 
    i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych 
    w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich 
    danych oraz uchylenia dyrektywy 95/46/WE (RODO).
`);

$("#img-adr-email").attr("title", "Email");
$("#img-adr-tel").attr("title", "Telefon");
