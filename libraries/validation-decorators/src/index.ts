// supported class-validator export
export {
  validateSync,
  ValidationError,
  IsBoolean,
  IsISO8601,
  IsOptional,
  Equals,
  NotEquals,
  IsEmpty,
  // IsNotEmpty.
  IsIn,
  IsNotIn,
  IsString,
  IsNumber,
  IsInt,
  IsArray,
  IsEnum,
  IsPositive,
  IsNegative,
  Min,
  Max,
  MinDate,
  MaxDate,
  IsBooleanString,
  IsDateString,
  // IsNumberString,
  Contains,
  NotContains,
  IsAlpha,
  IsAlphanumeric,
  IsDecimal,
  IsCreditCard,
  IsEmail,
  IsFQDN,
  IsHexColor,
  IsPostalCode,
  IsIP,
  IsJSON,
  IsObject,
  IsLowercase,
  IsMongoId,
  IsNumberString,
  IsUrl,
  IsUppercase,
  Length,
  MinLength,
  MaxLength,
  Matches,
  IsHash,
  // IsStrongPassword,
  ArrayContains,
  ArrayNotContains,
  ArrayNotEmpty,
  ArrayMinSize,
  ArrayMaxSize,
  ArrayUnique,
  IsInstance,
} from 'class-validator';

// supported custom
export * from './custom/is-dice-notation';
export * from './custom/is-money';
export * from './custom/is-uuidv4';
