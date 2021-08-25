import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class PoliciesComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
   public images = [

 '../assets/images/harare.jpg',

 '../assets/images/rocks.jpg',

 '../assets/images/sunset.jpg',

 '../assets/images/vicfalls.jpg'

 ];
 titles = [ 'Converge for Development', 'Converge for Development', 'Converge for Development', 'Converge for Development' ];
 discription = [
 'Collaborate with honest and trustworthy people to drive the development agenda for Zimbabwe.', 
 'Bring together all people from different walks of life',
 'Initiate, engage, partner and transform in partnership with local structures, government and development actors.',
 'Lead locally led economic development.'];
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig, private title: Title, private metaTagService: Meta, private canonicalService: CanonicalService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 8000; // images change in 8sec //
    config.wrap = true; // autometically redirect to first image //
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.title.setTitle('C4D Policies');
    this.metaTagService.updateTag(
      {name: 'description', content: 'View C4D Policies'}
    );
  }

}
