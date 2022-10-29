from abc import ABC, abstractmethod
from datetime import datetime


class ManipulatorDeLog(ABC):
    @classmethod
    @abstractmethod
    def log(cls, mgs):
        raise NotImplementedError


class LogEmArquivo(ManipulatorDeLog):
    @classmethod
    def log(cls, mgs):
        with open("arquivo.txt", "a") as arquivo:
            print(mgs, file=arquivo)


class LogEmTela(ManipulatorDeLog):
    @classmethod
    def log(cls, mgs):
        print(mgs)


class Log:
    def __init__(self, manipuladores: list[ManipulatorDeLog]):
        self.__manipuladores = set(manipuladores)

    def __formatar(self, nivel, mgs):
        date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{nivel} - {date}]: {mgs}"

    def __log(self, nivel, mgs):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(nivel, mgs))

    def info(self, mgs):
        self.__log("INFO", mgs)

    def alerta(self, mgs):
        self.__log("ALERTA", mgs)

    def erro(self, mgs):
        self.__log("ERRO", mgs)

    def debug(self, mgs):
        self.__log("DEBUG", mgs)


log = Log([LogEmArquivo, LogEmTela])
log.info("Informao: Aqui tem informação!!!")
log.alerta("Alert: Perigo, tem piranha no rio.")
log.erro("Erro: Erro no sistema...")
log.debug("Debug: Está tudo bem?")
