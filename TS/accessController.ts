/**
 *
 * 1. 은행 계좌를 모델링하는 BankAccount 클래스를 작성
 * - private 속성 accountNumber:string과 balance:number 정의
 * - public 메서드 deposit(amount:number):void를 구현하여 balance 금액 증가
 * - public 메서드 withDraw(amount:number):void를 구현하여 balance 금액 차감, 금액이 부족하면 오류메시지
 * - public 메서드 getBalance():number를 구현하여 현재 잔액 반환
 *
 */

/**
 * 2. BankAccount 클래스를 상속받는 SavingsAccount 클래스를 작성
 * - protected 속성 interestRate:number를 추가, 생성자에서 이자율 설정
 * - public 메서드 addInterest():void 구현하여 잔액에 이자를 추가, 이자 계산은 balance*interestRate로 계산
 *
 */

class BankAccount {
  private accountNumber: string;
  private balance: number = 0;

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  protected interestRate: number;

  constructor(accountNumber: string, interestRate: number) {
    super(accountNumber);
    this.interestRate = interestRate;
  }

  public addInterest(): void {
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
  }
}
