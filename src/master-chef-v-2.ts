// import { BigInt } from "@graphprotocol/graph-ts"

// Import event class.
import {
  AddPool,
  Deposit,
  EmergencyWithdraw,
  Init,
  OwnershipTransferred,
  SetPool,
  UpdateBoostContract,
  UpdateBoostMultiplier,
  UpdateBurnAdmin,
  UpdateCakeRate,
  UpdatePool,
  UpdateWhiteList,
  Withdraw
} from "../generated/MasterChefV2/MasterChefV2"

// Import entity class.
import { FarmPool, User } from "../generated/schema"

export function handleAddPool(event: AddPool): void {
  // Add something here
}

export function handleAddPoolSample (event: AddPool): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.pid = event.params.pid
  entity.allocPoint = event.params.allocPoint

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.ACC_CAKE_PRECISION(...)
  // - contract.BOOST_PRECISION(...)
  // - contract.CAKE(...)
  // - contract.CAKE_RATE_TOTAL_PRECISION(...)
  // - contract.MASTERCHEF_CAKE_PER_BLOCK(...)
  // - contract.MASTER_CHEF(...)
  // - contract.MASTER_PID(...)
  // - contract.MAX_BOOST_PRECISION(...)
  // - contract.boostContract(...)
  // - contract.burnAdmin(...)
  // - contract.cakePerBlock(...)
  // - contract.cakePerBlockToBurn(...)
  // - contract.cakeRateToBurn(...)
  // - contract.cakeRateToRegularFarm(...)
  // - contract.cakeRateToSpecialFarm(...)
  // - contract.getBoostMultiplier(...)
  // - contract.lastBurnedBlock(...)
  // - contract.lpToken(...)
  // - contract.owner(...)
  // - contract.pendingCake(...)
  // - contract.poolInfo(...)
  // - contract.poolLength(...)
  // - contract.totalRegularAllocPoint(...)
  // - contract.totalSpecialAllocPoint(...)
  // - contract.updatePool(...)
  // - contract.userInfo(...)
  // - contract.whiteList(...)
}

export function handleDeposit(event: Deposit): void {}

export function handleEmergencyWithdraw(event: EmergencyWithdraw): void {}

export function handleInit(event: Init): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleSetPool(event: SetPool): void {}

export function handleUpdateBoostContract(event: UpdateBoostContract): void {}

export function handleUpdateBoostMultiplier(
  event: UpdateBoostMultiplier
): void {}

export function handleUpdateBurnAdmin(event: UpdateBurnAdmin): void {}

export function handleUpdateCakeRate(event: UpdateCakeRate): void {}

export function handleUpdatePool(event: UpdatePool): void {}

export function handleUpdateWhiteList(event: UpdateWhiteList): void {}

export function handleWithdraw(event: Withdraw): void {}
