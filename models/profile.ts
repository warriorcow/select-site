export interface Profile {
  id:             number;
  date:           Date;
  date_gmt:       Date;
  guid:           GUID;
  modified:       Date;
  modified_gmt:   Date;
  slug:           string;
  status:         string;
  type:           string;
  link:           string;
  title:          GUID;
  content:        Content;
  excerpt:        Content;
  author:         number;
  featured_media: number;
  comment_status: string;
  ping_status:    string;
  sticky:         boolean;
  template:       string;
  format:         string;
  meta:           Meta;
  categories:     number[];
  tags:           number[];
  class_list:     string[];
  acf:            Acf;
  _links:         Links;
}

export interface Links {
  self:                  Self[];
  collection:            About[];
  about:                 About[];
  author:                AcfAttachment[];
  replies:               AcfAttachment[];
  'version-history':     VersionHistory[];
  'predecessor-version': PredecessorVersion[];
  'acf:attachment':      AcfAttachment[];
  'acf:term':            Term[];
  'wp:featuredmedia':    AcfAttachment[];
  'wp:attachment':       About[];
  'wp:term':             Term[];
  curies:                Cury[];
}

export interface About {
  href: string;
}

export interface AcfAttachment {
  embeddable: boolean;
  href:       string;
}

export interface Term {
  embeddable: boolean;
  taxonomy:   string;
  href:       string;
}

export interface Cury {
  name:      string;
  href:      string;
  templated: boolean;
}

export interface PredecessorVersion {
  id:   number;
  href: string;
}

export interface Self {
  href:        string;
  targetHints: TargetHints;
}

export interface TargetHints {
  allow: string[];
}

export interface VersionHistory {
  count: number;
  href:  string;
}

export interface Acf {
  main_category:           MainCategory;
  seo_description:         string;
  seo_title:               string;
  switch_tabs:             any[];
  sort:                    string;
  back_link:               string;
  preview_image:           CoversVideo[];
  fio:                     Fio;
  model_main_image:        CoversVideo;
  model_main_image_mobile: CoversVideo;
  model_main_video:        CoversVideo;
  model_main_video_mobile: CoversVideo;
  portfolio_image:         boolean;
  portfolio_image_mobile:  boolean;
  portfolio_video:         CoversVideo;
  portfolio_video_mobile:  CoversVideo;
  portfolio:               boolean;
  covers_image:            boolean;
  covers_image_mobile:     boolean;
  covers_video:            CoversVideo;
  covers_video_mobile:     CoversVideo;
  covers:                  CoversVideo[];
  shows_image:             CoversVideo;
  shows_image_mobile:      CoversVideo;
  shows_video:             CoversVideo;
  shows_video_mobile:      boolean;
  shows:                   boolean;
  digitals_image:          boolean;
  digitals:                CoversVideo[];
  videos_image:            boolean;
  videos:                  Video[];
  instagram:               string;
  www:                     string;
  params:                  Params;
}

export interface CoversVideo {
  ID:          number;
  id:          number;
  title:       string;
  filename:    string;
  filesize:    number;
  url:         string;
  link:        string;
  alt:         string;
  author:      string;
  description: string;
  caption:     string;
  name:        string;
  status:      Status;
  uploaded_to: number;
  date:        Date;
  modified:    Date;
  menu_order:  number;
  mime_type:   MIMEType;
  type:        Type;
  subtype:     Subtype;
  icon:        string;
  width:       number;
  height:      number;
  sizes?:      Sizes;
}

export enum MIMEType {
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png',
  VideoMp4 = 'video/mp4',
}

export interface Sizes {
  thumbnail:             string;
  'thumbnail-width':     number;
  'thumbnail-height':    number;
  medium:                string;
  'medium-width':        number;
  'medium-height':       number;
  medium_large:          string;
  'medium_large-width':  number;
  'medium_large-height': number;
  large:                 string;
  'large-width':         number;
  'large-height':        number;
  '1536x1536':           string;
  '1536x1536-width':     number;
  '1536x1536-height':    number;
  '2048x2048':           string;
  '2048x2048-width':     number;
  '2048x2048-height':    number;
}

export enum Status {
  Inherit = 'inherit',
}

export enum Subtype {
  JPEG = 'jpeg',
  Mp4 = 'mp4',
  PNG = 'png',
}

export enum Type {
  Image = 'image',
  Video = 'video',
}

export interface Fio {
  ru: RuClass;
  en: RuClass;
}

export interface RuClass {
  name:      string;
  last_name: string;
}

export interface MainCategory {
}

export interface Params {
  ru: Ru;
  en: ParamsEn;
}

export interface ParamsEn {
  hair: string;
  eyes: string;
}

export interface Ru {
  height: string;
  bust:   string;
  waist:  string;
  hips:   string;
  hair:   string;
  eyes:   string;
}

export interface Video {
  link:     string;
  image:    boolean | CoversVideo;
  vertical: boolean;
}

export interface Content {
  rendered:  string;
  protected: boolean;
}

export interface GUID {
  rendered: string;
}

export interface Meta {
  _acf_changed: boolean;
  footnotes:    string;
}
