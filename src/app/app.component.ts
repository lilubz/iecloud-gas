import { Component, Injectable, ErrorHandler } from '@angular/core';
declare let TraceKit: any;

TraceKit.report.subscribe(function yourLogger(errorReport) {
  console.log(errorReport.message);

  errorReport.stack.forEach(function (err) {

    if (err.func) {
      console.log(err.func);
    }
    if (err.context) {
      console.log(err.context.join())
    }
    console.log('ERROR ' + err.url + ' [' + err.line + ']');

  })
  //console.dir(JSON.stringify(errorReport, null, 4));
  //send via ajax to server, or use console.error in development
  //to get you started see: https://gist.github.com/4491219
});

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
    constructor() { }
    handleError(error) {
        // your custom error handling logic
        if (navigator.userAgent.indexOf("MSIE 9.0;") === -1) {
            console.error(error);
        } else {
            TraceKit.report(error);
        }

    }
}
@Component({
  selector: 'gas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  

}
