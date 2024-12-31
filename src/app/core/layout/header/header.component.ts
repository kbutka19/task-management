import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { languages } from '../../constants/language.constant';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedLanguage!: string;
  languages = languages;

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }
  
  changeLanguage(event?: string) {
    console.log(event)
  }

  logout() {}
}
