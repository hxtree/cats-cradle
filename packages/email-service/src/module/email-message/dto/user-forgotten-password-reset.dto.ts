import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsFQDN } from 'class-validator';
import { Expose } from 'class-transformer';
import { TemplateDto } from './template.dto';

export class UserForgottenPasswordResetDto extends TemplateDto {
  @IsString()
  @ApiProperty({
    description: 'The username of the recipient',
    default: 'jane.doe',
  })
  @Expose()
  username!: string;

  @IsFQDN()
  @ApiProperty({
    description: 'The link for the reset password',
    default: 'https://example.com/forgot-password-reset?token=abc123',
  })
  @Expose()
  link!: string;
}
