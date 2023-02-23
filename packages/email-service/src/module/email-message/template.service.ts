import Handlebars = require('handlebars');
import { convert as htmlToText } from 'html-to-text';
import { Injectable } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { FormatType } from './types/format.type';

@Injectable()
export class TemplateService {
  async convertToFormat(
    template: string,
    data: any,
    format: FormatType,
  ): Promise<any> {
    const { html, text } = await this.convert(template, data);

    switch (format) {
      case FormatType.HTML:
        return await Promise.resolve({ data: html });
      case FormatType.TEXT:
        return await Promise.resolve({ data: text });
      case FormatType.TEMPLATE:
        return await Promise.resolve({ data: template });
      default:
        return await Promise.resolve({ html, text });
    }
  }

  async convert(template: string, data: any): Promise<any> {
    // const data = await instanceToPlain(dto)[0];
    const html = await this.parse(template, data);
    const text = await this.toText(html);

    return { html, text } as const;
  }

  async parse(template: string, data: any): Promise<string> {
    const templateCompiled = Handlebars.compile(template);
    return templateCompiled(data);
  }

  async toText(html: string): Promise<string> {
    const options = {
      wordwrap: 130,
    };
    return htmlToText(html, options);
  }
}