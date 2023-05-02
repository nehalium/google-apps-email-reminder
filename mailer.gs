var Mailer = (function() {
  // Public members  
  var mailer = {};
  mailer.mail = mail;
  mailer.getBody = getBody;
  return mailer;

  function getBody(fileName, params) {
    let file = HtmlService.createTemplateFromFile(fileName);
    file.params = params;
    return file.evaluate().getContent();
  }
  
  // Private members
  // Sends an email based on the specified params
  function mail(params) {
    var message = {};
    if (Config["debug"]) {
      message = {
        name: Config["mail.from"],
        to: Config["mail.to.debug"],
        subject: "[DEBUG] " + params.subject,
        htmlBody: params.body
      };
    }
    else {
      message = {
        name: Config["mail.from"],
        to: Config["mail.to"],
        cc: Config["mail.cc"],
        subject: params.subject,
        htmlBody: params.body
      };
    }
    MailApp.sendEmail(message);
  }
})()