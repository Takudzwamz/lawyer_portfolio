import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spaceman';

  constructor(private metaTagService: Meta) {}


  ngOnInit(): void {
    this.metaTagService.addTags([
      {name: 'keywords', content: 'Converge 4 Development, C4D, NGO, None-Profit, Zimbabwe, Zimbabwe development,Sustainable, Harare, Victoria Falls, Zim, Infrastructure, Africa'},
      {name: 'robots', content: 'index, follow'},
      {name: 'google-site-verification', content: 'zqnYEsQ6-_sH21DgGfnth3gUmjbo8bazU4lUlMBvOX8'},
      {name: 'description', content: 'C4D will reach out and call upon individuals who feel compelled by the Zimbabwean stalled development case to converge with like-minded individuals and create a formidable garrison for hopeful Zimbabweans.'},
      {name: 'developers', content: 'Zimbabweans'},
      {name: 'twitter:card', content: 'Converge 4 Development'},
      {name: 'twitter:title', content: 'Pushing development for all Zimbabweans'},
      {name: 'twitter:description', content: 'C4D will reach out and call upon individuals who feel compelled by the Zimbabwean stalled development case to converge with like-minded individuals and create a formidable garrison for hopeful Zimbabweans.'},

    ]);
  }
}
