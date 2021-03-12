import { NgForm } from '@angular/forms';
import { Plugins } from '@capacitor/core';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
// Services
import { GlobalService } from 'src/app/services/global.service';
import { DownloadService } from 'src/app/services/download.service';

const { Browser } = Plugins;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage {

  list: string[] = [];
  downloadsList: string[] = [];

  constructor(
    // public
    public alertController: AlertController,
    // private
    private globalService: GlobalService,
    private downloadService: DownloadService
  ) { }

  // List manipulation
  addToList(form: NgForm) {
    this.list.push(form.value.link);
    form.reset();
  }

  deleteItem(index: number) {
    this.list.splice(index, 1);
  }

  // Downloading links
  downloadList(type: string) {
    this.downloadService.download(this.list, type).subscribe(
      data => this.list = [],
      error => console.error('error : ', error)
    );
  }

  // Downloads list
  getDoanloadsList() {
    this.downloadService.getDownloadedMediaList().subscribe(
      (data: { result: string[] }) => {
        this.downloadsList = [];
        this.downloadsList.push(...data.result);
      },
      error => console.error('error : ', error)
    );
  }

  // Helper functions
  async openDownloadLink(fileName: string) {
    const url = this.globalService.getUrl();
    if (url != null) {
      console.log(`${url}/public/${fileName}`);
      await Browser.open({ url: `${url}/public/${fileName}` });
    }
  }

  async deletionConfirmationAlert(index: number) {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to delete this link ?',
      buttons: [
        { text: 'No', role: 'cancel' },
        { text: 'Yes', handler: () => this.deleteItem(index) }
      ]
    });
    await alert.present();
  }

  persistUrl(form: NgForm) {
    this.globalService.persistUrl(form.value.url);
  }

}
