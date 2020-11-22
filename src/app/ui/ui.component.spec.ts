 import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 2;
     component.operator2 = 2;
 
     // Act
     component.addition();
     result = component.result;
 
     // Assert
     expect(result).toBe(4);
  });

 
  it('should add operator1 and operator2 when i click the addition button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.addition-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(7.5);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
 
    // Act
    component.addition();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('10');
     
  });

});

describe('Ui substraction - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call substraction method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 6;
     component.operator2 = 3;
 
     // Act
     component.substraction();
     result = component.result;
 
     // Assert
     expect(result).toBe(3);
  });

 
  it('should add operator1 and operator2 when i click the addition button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.substraction-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(2.5);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 2;
 
    // Act
    component.substraction();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('3');
     
  });

});

describe('Ui multiplication - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call multiplication method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 3;
     component.operator2 = 3;
 
     // Act
     component.multiplication();
     result = component.result;
 
     // Assert
     expect(result).toBe(9);
  });

 
  it('should add operator1 and operator2 when i click the multiplication button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 3.0;
    let multiplicationButton = fixture.debugElement.query(By.css('.multiplication-button'));

    // Act
    multiplicationButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(15);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 2;
 
    // Act
    component.multiplication();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('10');
     
  });

});

describe('Ui division - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call division method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 6;
     component.operator2 = 3;
 
     // Act
     component.division();
     result = component.result;
 
     // Assert
     expect(result).toBe(2);
  });

 
  it('should add operator1 and operator2 when i click the division button ', () => {
    // Arrange 
    component.operator1 = 10.0;
    component.operator2 = 2.0;
    let divisionButton = fixture.debugElement.query(By.css('.division-button'));

    // Act
    divisionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(5);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 2;
 
    // Act
    component.division();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('2.5');
     
  });

});

describe('Ui exp - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call exp method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 3;
     component.operator2 = 2;
 
     // Act
     component.exp();
     result = component.result;
 
     // Assert
     expect(result).toBe(9);
  });

 
  it('should add operator1 and operator2 when i click the exp button ', () => {
    // Arrange 
    component.operator1 = 3.0;
    component.operator2 = 2.0;
    let expButton = fixture.debugElement.query(By.css('.exp-button'));

    // Act
    expButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(9);

   });

  it('Should render exp in result div', () => {
    // Arrange
    component.operator1 = 3;
    component.operator2 = 2;
 
    // Act
    component.exp();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('9');
     
  });

});

describe('Ui sqr - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call sqr method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 4;
 
     // Act
     component.sqr();
     result = component.result;
 
     // Assert
     expect(result).toBe(16);
  });

 
  it('should add operator1 and operator2 when i click the exp button ', () => {
    // Arrange 
    component.operator1 = 3.0;
    let sqrButton = fixture.debugElement.query(By.css('.sqr-button'));

    // Act
    sqrButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(9);

   });

  it('Should render exp in result div', () => {
    // Arrange
    component.operator1 = 3;
 
    // Act
    component.sqr();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('9');
     
  });

});

describe('Ui sqrt - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call sqr method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 4;
 
     // Act
     component.sqrt();
     result = component.result;
 
     // Assert
     expect(result).toBe(2);
  });

 
  it('should add operator1 when i click the sqrt button ', () => {
    // Arrange 
    component.operator1 = 2.0;
    let sqrtButton = fixture.debugElement.query(By.css('.sqrt-button'));

    // Act
    sqrtButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(1.4142135623730951);

   });

  it('Should render exp in result div', () => {
    // Arrange
    component.operator1 = 4;
 
    // Act
    component.sqrt();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('2');
     
  });

});

