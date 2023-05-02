// Main entry point
function main() {
  remind();
}

function remind() {
  let params = {
        subject: Config["mail.subject"],
        body: Mailer.getBody("message", {
          "formlink": Config["message.formlink"]
        })
      };
  Mailer.mail(params);
}