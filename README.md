# Reactive forms:

utilizando formularios reativos no angular: 
- importar formsModule e reactiveFormsModule no arquivo app module caso a versão do angular seja inferior a 14 e nao possua o recurso de standalone.
- em seguida capiturar o envio de formulario atraves de um evento chamado (ngSubmit)="submit()".
- colocar a diretiva na tag <form [formGroup] = "nomeDoGROUP" #formDir="ngForm"> => #formDir="ngForm" (usado para criar referencia a um formulario no angular permitindo que os recursos e dados do formulario sejam acessados de maneira programatica) 

- após fazer as referencias do formControl foi feito a referencia em cada input com a doretiva formControlName="nome".
    essa doretiva referência o dado que esta sendo inserido e salvando em uma variavel dentro do componente.ts.
# arquivo TS do componente de formulario.

- vamos criar a propriedade que nomeamos na <form [formGoup]="dadosForm"></form>. 
    dadosForm=FormGroup;

    -dentro do metodo NgOnInit temos que instanciar o dadosForm e inicializar o formulario, fazendo a chamada de dados e colocando o recurso de validação chamado VALIDATORS.


    ngOnInit(): void {
    this.dadosForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('',[Validators.required]),
      image: new FormControl('')
    })
   } 
- ainda assim ele me gerara um erro falando que as propriedades nao existem por isso é preciso fazer um get com o nome da propriedade.
    get title(){
        return this.momentForm.get('title')!;
    }