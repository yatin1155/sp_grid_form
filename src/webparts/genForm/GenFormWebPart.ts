import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './GenFormWebPart.module.scss';
import * as strings from 'GenFormWebPartStrings';
import './genFormWebPart.scss';
import "jquery";
import "material-design-lite";

export interface IGenFormWebPartProps {
  description: string;
}

export default class GenFormWebPart extends BaseClientSideWebPart<IGenFormWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <section class="portletMain" >
      <div id="fountainTextG">
        <div id="fountainTextG_1" class="fountainTextG">L</div>
        <div id="fountainTextG_2" class="fountainTextG">o</div>
        <div id="fountainTextG_3" class="fountainTextG">a</div>
        <div id="fountainTextG_4" class="fountainTextG">d</div>
        <div id="fountainTextG_5" class="fountainTextG">i</div>
        <div id="fountainTextG_6" class="fountainTextG">n</div>
        <div id="fountainTextG_7" class="fountainTextG">g</div>
        <div id="fountainTextG_8" class="fountainTextG">.</div>
        <div id="fountainTextG_9" class="fountainTextG">.</div>
        <div id="fountainTextG_10" class="fountainTextG">.</div>
      </div>
    </section>
    `;
    require("./genForm.js");
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
