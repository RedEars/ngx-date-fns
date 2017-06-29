import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { SubMonthsPipe } from './sub-months.pipe';

describe('SubMonthsPipe', () => {
  let pipe: SubMonthsPipe;

  beforeEach(() => pipe = new SubMonthsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, SubMonthsPipe.NO_ARGS_ERROR);
  });

  it('should subtract 5 months from 1 February 2015', () => {
    const date = new Date(2015, 1, 1);
    expect(pipe.transform(date, 5))
      .to.eql(new Date(2014, 8, 1));
  });
});
